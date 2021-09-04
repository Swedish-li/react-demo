import React, { FC, useEffect, useContext, useState } from "react";
import {
  FormattedMessage,
  //   FormattedNumber,
  IntlProvider,
} from "react-intl";
import styled from "styled-components";
import { Container } from "../../components";
import { International } from "../../components/International";

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

const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    const changeLocale = async () => {
      if (locale !== defaultLocale) {
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

const IconContainer = styled.div`
  font-size: 5em;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary.color};
`;

const LocaleSelect = styled.select`
  font-size: 0.6em;
  color: ${({ theme }) => theme.primary.color};
  background-color: ${({ theme }) => theme.primary.backgroundColor};
  border-radius: 0.2rem;
`;

const LocaleOption = styled.option`
  background-color: ${({ theme }) => theme.primary.backgroundColor};
`;

const Card = () => {
  const { setLocale, locale } = useContext(LocaleContext);

  return (
    <Container>
      <IconContainer>
        <International />
      </IconContainer>
      <LocaleSelect
        value={locale}
        onChange={(e) => {
          const value = e.target.value as Locale;
          setLocale(value);
        }}
      >
        {Object.keys(localNames).map((k) => {
          const key = k as Locale;
          return (
            <LocaleOption value={k} key={k}>
              {localNames[key]}
            </LocaleOption>
          );
        })}
      </LocaleSelect>
      <p>
        <FormattedMessage id="helloWorld" />
      </p>
    </Container>
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
