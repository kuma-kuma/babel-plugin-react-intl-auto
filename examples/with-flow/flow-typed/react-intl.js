import React from 'react'

// Mostly from https://github.com/yahoo/react-intl/wiki/API#react-intl-api

type LocaleData = {
  [key: string]: any,
  locale: string,
}

type MessageDescriptor =
  | string
  | {|
      defaultMessage: string,
      description?: string,
    |}

type MessageDescriptorMap = { [key: string]: any }

type IntlConfig = {
  locale: string,
  formats: Object,
  messages: { [id: string]: string },

  defaultLocale: string,
  defaultFormats: Object,
}

type IntlFormat = {
  formatDate: (value: any, options?: Object) => string,
  formatTime: (value: any, options?: Object) => string,
  formatRelative: (value: any, options?: Object) => string,
  formatNumber: (value: any, options?: Object) => string,
  formatPlural: (value: any, options?: Object) => string,
  formatMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object
  ) => string,
  formatHTMLMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object
  ) => string,
}

type $IntlShape = IntlConfig & IntlFormat & { now: () => number }

type DateTimeFormatOptions = {
  localeMatcher?: 'best fit' | 'lookup',
  formatMatcher?: 'basic' | 'best fit',

  timeZone?: string,
  hour12?: boolean,

  weekday?: 'narrow' | 'short' | 'long',
  era?: 'narrow' | 'short' | 'long',
  year?: 'numeric' | '2-digit',
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day?: 'numeric' | '2-digit',
  hour?: 'numeric' | '2-digit',
  minute?: 'numeric' | '2-digit',
  second?: 'numeric' | '2-digit',
  timeZoneName?: 'short' | 'long',
}

type RelativeFormatOptions = {
  style: 'best fit' | 'numeric',
  units: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
}

type NumberFormatOptions = {
  localeMatcher?: 'best fit' | 'lookup',

  style?: 'decimal' | 'currency' | 'percent',

  currency?: string,
  currencyDisplay?: 'symbol' | 'code' | 'name',

  useGrouping?: boolean,

  minimumIntegerDigits?: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  minimumSignificantDigits?: number,
  maximumSignificantDigits?: number,
}

type PluralFormatOptions = {
  style: 'cardinal' | 'ordinal',
}

type PluralCategoryString = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

type $DateParseable = number | string | Date

declare module 'react-intl' {
  // PropType checker
  declare function intlShape(
    props: Object,
    propName: string,
    componentName: string
  ): void
  declare function addLocaleData(data: LocaleData | Array<LocaleData>): void
  declare function defineMessages(
    messageDescriptors: MessageDescriptorMap
  ): MessageDescriptorMap
  declare function injectIntl(
    WrappedComponent: React.ComponentType<*>,
    options?: {
      intlPropName: string,
      withRef: boolean,
    }
  ): React.ComponentType<*>
  declare function formatMessage(
    messageDescriptor: MessageDescriptor,
    values?: Object
  ): string
  declare function formatHTMLMessage(
    messageDescriptor: MessageDescriptor,
    values?: Object
  ): string
  declare function formatDate(
    value: any,
    options?: DateTimeFormatOptions & { format: string }
  ): string
  declare function formatTime(
    value: any,
    options?: DateTimeFormatOptions & { format: string }
  ): string
  declare function formatRelative(
    value: any,
    options?: RelativeFormatOptions & { format: string, now: any }
  ): string
  declare function formatNumber(
    value: any,
    options?: NumberFormatOptions & { format: string }
  ): string
  declare function formatPlural(
    value: any,
    options?: PluralFormatOptions
  ): PluralCategoryString

  declare class FormattedMessage
    extends React.Component<
      void,
      MessageDescriptor & {
        values?: Object,
        tagName?: string,
      },
      void
    > {}
  declare class FormattedHTMLMessage
    extends React.Component<
      void,
      DateTimeFormatOptions & {
        values?: Object,
        tagName?: string,
      },
      void
    > {}
  declare class FormattedDate
    extends React.Component<
      void,
      DateTimeFormatOptions & {
        value: $DateParseable,
        format?: string,
      },
      void
    > {}
  declare class FormattedTime
    extends React.Component<
      void,
      DateTimeFormatOptions & {
        value: $DateParseable,
        format?: string,
      },
      void
    > {}
  declare class FormattedRelative
    extends React.Component<
      void,
      RelativeFormatOptions & {
        value: $DateParseable,
        format?: string,
        updateInterval?: number,
        initialNow?: $DateParseable,
      },
      void
    > {}
  declare class FormattedNumber
    extends React.Component<
      void,
      NumberFormatOptions & {
        value: number | string,
        format?: string,
      },
      void
    > {}
  declare class FormattedPlural
    extends React.Component<
      void,
      PluralFormatOptions & {
        value: number | string,
        other: React.Component,
        zero?: React.Component,
        one?: React.Component,
        two?: React.Component,
        few?: React.Component,
        many?: React.Component,
      },
      void
    > {}
  declare class IntlProvider
    extends React.Component<
      void,
      IntlConfig & {
        children: React.Component,
        initialNow?: $DateParseable,
      },
      void
    > {}
  declare type IntlShape = $IntlShape
}
