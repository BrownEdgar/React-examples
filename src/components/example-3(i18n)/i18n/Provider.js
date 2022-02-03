import React, {Fragment} from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';

export default function Provider({ children, locale = LOCALES.ENGLISH}) {
	return <IntlProvider
			locale={locale}
			textContent={Fragment}
			messages={messages[locale]}
	>
		{children}

	</IntlProvider>
}
