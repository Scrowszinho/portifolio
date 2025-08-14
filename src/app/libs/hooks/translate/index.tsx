import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';
import translations from './translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const TranslateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['pt']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
