import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  FormattedMessage,
  //   FormattedNumber,
  IntlProvider,
} from "react-intl";

// https://github.com/formatjs/formatjs/tree/main/packages/react-intl/examples

enum Locale {
  ZH_HANS = "zh-Hans",
  JA = "ja",
  EN = "en",
}

const localNames: Record<Locale, string> = {
  [Locale.EN]: "English",
  [Locale.JA]: "日本語",
  [Locale.ZH_HANS]: "简体中文",
};

const defaultLocale = Locale.EN;

const defaultMessages = {
  helloWorld: "Hello World!",
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => undefined,
});
// Consumer: LocaleConsumer,
const { Provider: RawLocaleProvider } = LocaleContext;
// const messagesInFrench = {
//   myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
// };

const LocaleProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(defaultMessages);

  React.useEffect(() => {
    const changeLocale = async () => {
      if (locale !== defaultLocale) {
        console.info(locale, "change local----");
        // It seems like Webpack is unable to use aliases for lazy imports
        const mod = await import(`./locale/${locale}.json`);
        setMessages(mod.default);
      } else {
        setMessages(defaultMessages);
      }
    };

    changeLocale();
  }, [locale]);

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={messages}
      onError={(err) => {
        console.error(err);
      }}
      key={locale}
    >
      <RawLocaleProvider
        value={{
          locale,
          setLocale,
        }}
      >
        {children}
      </RawLocaleProvider>
    </IntlProvider>
  );
};

const Card = () => {
  const { setLocale, locale } = useContext(LocaleContext);

  return (
    <>
      <select
        value={locale}
        onChange={(e) => {
          const value = e.target.value as Locale;
          console.info(value);
          setLocale(value);
        }}
      >
        {Object.keys(localNames).map((k) => {
          const key = k as Locale;
          return (
            <option value={k} key={k}>
              {localNames[key]}
            </option>
          );
        })}
      </select>
      <p>
        <FormattedMessage id="helloWorld" />
      </p>
    </>
  );
};

const Intl = () => {
  return (
    <LocaleProvider>
      <Card />
    </LocaleProvider>
  );
};

export default Intl;
