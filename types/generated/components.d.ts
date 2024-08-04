import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedWave extends Schema.Component {
  collectionName: 'components_shared_waves';
  info: {
    displayName: 'wave';
    description: '';
  };
  attributes: {
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    isVisible: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Attribute.Media<'videos'>;
    cover: Attribute.Media<'images'>;
    altText: Attribute.String;
  };
}

export interface SharedTimelineCard extends Schema.Component {
  collectionName: 'components_shared_timeline_cards';
  info: {
    displayName: 'TimelineCard';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Relation<
      'shared.timeline-card',
      'oneToOne',
      'api::image.image'
    >;
    theme: Attribute.Relation<
      'shared.timeline-card',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SharedTestimonialsCard extends Schema.Component {
  collectionName: 'components_shared_testimonials_cards';
  info: {
    displayName: 'TestimonialCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images', true>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    text: Attribute.Text & Attribute.Required;
    author: Attribute.Text;
    theme: Attribute.Relation<
      'shared.testimonials-card',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SharedTabCardTheme extends Schema.Component {
  collectionName: 'components_shared_tab_card_themes';
  info: {
    displayName: 'tabCardTheme';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedPersonellcard extends Schema.Component {
  collectionName: 'components_shared_personellcards';
  info: {
    displayName: 'Personell\u0421ard';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    text: Attribute.String & Attribute.Required;
    image: Attribute.Relation<
      'shared.personellcard',
      'oneToOne',
      'api::image.image'
    >;
    theme: Attribute.Relation<
      'shared.personellcard',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SharedOverlayBlock extends Schema.Component {
  collectionName: 'components_shared_overlay_blocks';
  info: {
    displayName: 'overlayBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedNoodlesCard extends Schema.Component {
  collectionName: 'components_shared_noodles_cards';
  info: {
    displayName: 'infoCardTypeA';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    borderColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    url: Attribute.String;
    title: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    image: Attribute.Media<'images'>;
    altText: Attribute.String;
    isIcon: Attribute.Boolean;
    url: Attribute.String;
    newTab: Attribute.Boolean;
  };
}

export interface SharedImageCard extends Schema.Component {
  collectionName: 'components_shared_image_cards';
  info: {
    displayName: 'imageCard';
    description: '';
  };
  attributes: {
    cardHeading: Attribute.String;
    cardDescription: Attribute.Text;
    cardColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    cardBgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkBgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkText: Attribute.String;
    linkUrl: Attribute.String;
    linkIcon: Attribute.Media<'images'>;
    linkTitle: Attribute.String;
    linkNewTab: Attribute.Boolean;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'heading';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    position: Attribute.Enumeration<['left', 'center']>;
    level: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<2>;
  };
}

export interface SharedGridBlock extends Schema.Component {
  collectionName: 'components_shared_grid_blocks';
  info: {
    displayName: 'gridBlock';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkBgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkText: Attribute.String;
    linkUrl: Attribute.String;
    linkIcon: Attribute.Media<'images'>;
    linkTitle: Attribute.String;
    linkNewTab: Attribute.Boolean;
    image: Attribute.Media<'images'>;
  };
}

export interface SharedContactColumn extends Schema.Component {
  collectionName: 'components_shared_contact_columns';
  info: {
    displayName: 'ContactColumn';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 42;
      }>;
    label: Attribute.String & Attribute.Required;
    showWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SharedColumnCard extends Schema.Component {
  collectionName: 'components_shared_column_cards';
  info: {
    displayName: 'columnCard';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    article: Attribute.Relation<
      'shared.column-card',
      'oneToOne',
      'api::article.article'
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    linkText: Attribute.String;
    linkColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedColor extends Schema.Component {
  collectionName: 'components_shared_colors';
  info: {
    displayName: 'theme';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 32;
      }>;
    type: Attribute.Enumeration<['nav', 'main', 'inverted', 'outline', 'form']>;
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SharedArticleCategoryTab extends Schema.Component {
  collectionName: 'components_shared_article_category_tabs';
  info: {
    displayName: 'articleCategoryTabTheme';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    borderColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    activeColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    activeBgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
    activeBorderColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SectionsWaveBanner extends Schema.Component {
  collectionName: 'components_sections_wave_banners';
  info: {
    displayName: 'waveBanner';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    image: Attribute.Component<'shared.image'>;
    isLargeImage: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.Component<'shared.heading'>;
    text: Attribute.String;
    cta: Attribute.Component<'shared.button'>;
    backgroundColor: Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    isTextBox: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionsTwoColumns extends Schema.Component {
  collectionName: 'components_sections_two_columns';
  info: {
    displayName: 'TwoColumns';
  };
  attributes: {
    bottomWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ratio: Attribute.Enumeration<['one:one', 'two:one']>;
    theme: Attribute.Relation<
      'sections.two-columns',
      'oneToOne',
      'api::theme.theme'
    >;
    column: Attribute.Relation<
      'sections.two-columns',
      'oneToOne',
      'api::column.column'
    >;
  };
}

export interface SectionsTopStripe extends Schema.Component {
  collectionName: 'components_sections_top_stripes';
  info: {
    displayName: 'stripe';
    description: '';
  };
  attributes: {
    theme: Attribute.Component<'shared.color'>;
  };
}

export interface SectionsTimeline extends Schema.Component {
  collectionName: 'components_sections_timelines';
  info: {
    displayName: 'Timeline';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'shared.heading'>;
    card: Attribute.Component<'shared.timeline-card', true>;
    showWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    theme: Attribute.Relation<
      'sections.timeline',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsTestimonials extends Schema.Component {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    card: Attribute.Component<'shared.testimonials-card', true>;
    showWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    theme: Attribute.Relation<
      'sections.testimonials',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsSecondaryBanner extends Schema.Component {
  collectionName: 'components_sections_secondary_banners';
  info: {
    displayName: 'secondaryBanner';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    title: Attribute.Component<'shared.heading'>;
    text: Attribute.Text;
    backgroundColor: Attribute.Enumeration<
      ['white', 'black', 'background', 'primary', 'secondary', 'tertiary']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    image: Attribute.Component<'shared.image'> & Attribute.Required;
    cta1: Attribute.Component<'shared.button'>;
    cta2: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'richText';
    icon: 'text-height';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsPersonellCards extends Schema.Component {
  collectionName: 'components_sections_personell_cards';
  info: {
    displayName: 'Personell\u0421ards';
    description: '';
  };
  attributes: {
    showWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.Component<'shared.heading'>;
    card: Attribute.Component<'shared.personellcard', true>;
  };
}

export interface SectionsOverlayBlockTest extends Schema.Component {
  collectionName: 'components_sections_overlay_block_tests';
  info: {
    displayName: 'overlayBlockTest';
  };
  attributes: {
    theme: Attribute.Component<'shared.color'>;
  };
}

export interface SectionsInfoCardsTypeA extends Schema.Component {
  collectionName: 'components_sections_info_cards_type_as';
  info: {
    displayName: 'infoCardsTypeA';
    description: '';
  };
  attributes: {
    theme: Attribute.Component<'shared.color'>;
    heading: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'shared.button'>;
    cards: Attribute.Component<'shared.noodles-card', true>;
  };
}

export interface SectionsImageBanner extends Schema.Component {
  collectionName: 'components_sections_image_banners';
  info: {
    displayName: 'imageBanner';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'shared.image-card'>;
    image: Attribute.Media<'images'>;
    bgColor: Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary'
      ]
    >;
  };
}

export interface SectionsHeroBanner extends Schema.Component {
  collectionName: 'components_sections_hero_banners';
  info: {
    displayName: 'heroBanner';
    description: '';
  };
  attributes: {
    coverImage: Attribute.Media<'images'>;
    cta: Attribute.Component<'shared.button'>;
    overlayBlock: Attribute.Component<'shared.overlay-block'>;
  };
}

export interface SectionsGetInTouchForm extends Schema.Component {
  collectionName: 'components_sections_get_in_touch_forms';
  info: {
    displayName: 'GetInTouchForm';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    url: Attribute.String;
    showWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionsEmailForm extends Schema.Component {
  collectionName: 'components_sections_email_forms';
  info: {
    displayName: 'emailForm';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    url: Attribute.String;
  };
}

export interface SectionsContactBanner extends Schema.Component {
  collectionName: 'components_sections_contact_banners';
  info: {
    displayName: 'ContactBanner';
  };
  attributes: {
    column: Attribute.Component<'shared.contact-column', true>;
    theme: Attribute.Relation<
      'sections.contact-banner',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsColumns extends Schema.Component {
  collectionName: 'components_sections_columns';
  info: {
    displayName: 'columns';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'shared.heading'>;
    theme: Attribute.Component<'shared.color'>;
    cta: Attribute.Component<'shared.button'>;
    cards: Attribute.Component<'shared.column-card', true>;
    showWave: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SectionsColumnsWithTabs extends Schema.Component {
  collectionName: 'components_sections_columns_with_tabs';
  info: {
    displayName: 'columnsWithTabs';
    description: '';
  };
  attributes: {
    cta: Attribute.Component<'shared.button'>;
    maxCardsToDisplay: Attribute.Integer & Attribute.DefaultTo<3>;
    tabTheme: Attribute.Component<'shared.article-category-tab'>;
    tabs: Attribute.Relation<
      'sections.columns-with-tabs',
      'oneToMany',
      'api::article-category.article-category'
    >;
    tabCardTheme: Attribute.Component<'shared.tab-card-theme'>;
  };
}

export interface SectionsChart extends Schema.Component {
  collectionName: 'components_sections_charts';
  info: {
    displayName: 'Chart';
  };
  attributes: {
    title: Attribute.String;
    outline: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
  };
}

export interface SectionsCarousel extends Schema.Component {
  collectionName: 'components_sections_carousels';
  info: {
    displayName: 'carousel';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    title: Attribute.Component<'shared.heading'>;
    elements: Attribute.Component<'shared.image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    cta: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsBlocksGrid extends Schema.Component {
  collectionName: 'components_sections_blocks_grids';
  info: {
    displayName: 'blocksGrid';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    theme: Attribute.Component<'shared.color'>;
    block: Attribute.Component<'shared.grid-block', true>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.wave': SharedWave;
      'shared.video': SharedVideo;
      'shared.timeline-card': SharedTimelineCard;
      'shared.testimonials-card': SharedTestimonialsCard;
      'shared.tab-card-theme': SharedTabCardTheme;
      'shared.seo': SharedSeo;
      'shared.personellcard': SharedPersonellcard;
      'shared.overlay-block': SharedOverlayBlock;
      'shared.noodles-card': SharedNoodlesCard;
      'shared.meta-social': SharedMetaSocial;
      'shared.link': SharedLink;
      'shared.image': SharedImage;
      'shared.image-card': SharedImageCard;
      'shared.heading': SharedHeading;
      'shared.grid-block': SharedGridBlock;
      'shared.contact-column': SharedContactColumn;
      'shared.column-card': SharedColumnCard;
      'shared.color': SharedColor;
      'shared.button': SharedButton;
      'shared.article-category-tab': SharedArticleCategoryTab;
      'sections.wave-banner': SectionsWaveBanner;
      'sections.two-columns': SectionsTwoColumns;
      'sections.top-stripe': SectionsTopStripe;
      'sections.timeline': SectionsTimeline;
      'sections.testimonials': SectionsTestimonials;
      'sections.secondary-banner': SectionsSecondaryBanner;
      'sections.rich-text': SectionsRichText;
      'sections.personell-cards': SectionsPersonellCards;
      'sections.overlay-block-test': SectionsOverlayBlockTest;
      'sections.info-cards-type-a': SectionsInfoCardsTypeA;
      'sections.image-banner': SectionsImageBanner;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.get-in-touch-form': SectionsGetInTouchForm;
      'sections.email-form': SectionsEmailForm;
      'sections.contact-banner': SectionsContactBanner;
      'sections.columns': SectionsColumns;
      'sections.columns-with-tabs': SectionsColumnsWithTabs;
      'sections.chart': SectionsChart;
      'sections.carousel': SectionsCarousel;
      'sections.blocks-grid': SectionsBlocksGrid;
      'meta.metadata': MetaMetadata;
    }
  }
}
