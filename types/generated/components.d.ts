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
    Text: Attribute.Text & Attribute.Required;
    Image: Attribute.Relation<
      'shared.timeline-card',
      'oneToOne',
      'api::image.image'
    >;
    Theme: Attribute.Relation<
      'shared.timeline-card',
      'oneToOne',
      'api::theme.theme'
    >;
    Title: Attribute.Relation<
      'shared.timeline-card',
      'oneToOne',
      'api::title.title'
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
    Icon: Attribute.Media<'images', true>;
    Text: Attribute.Text & Attribute.Required;
    Author: Attribute.Text;
    Theme: Attribute.Relation<
      'shared.testimonials-card',
      'oneToOne',
      'api::theme.theme'
    >;
    Title: Attribute.Relation<
      'shared.testimonials-card',
      'oneToOne',
      'api::title.title'
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
    Color: Attribute.Enumeration<
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
    BgColor: Attribute.Enumeration<
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
    LinkColor: Attribute.Enumeration<
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
    Title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Text: Attribute.String & Attribute.Required;
    Image: Attribute.Relation<
      'shared.personellcard',
      'oneToOne',
      'api::image.image'
    >;
    Theme: Attribute.Relation<
      'shared.personellcard',
      'oneToOne',
      'api::theme.theme'
    >;
    SocialMedias: Attribute.Relation<
      'shared.personellcard',
      'oneToMany',
      'api::social-media.social-media'
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
    Text: Attribute.Text;
    Title: Attribute.Relation<
      'shared.overlay-block',
      'oneToOne',
      'api::title.title'
    >;
    Theme: Attribute.Relation<
      'shared.overlay-block',
      'oneToOne',
      'api::theme.theme'
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
    Text: Attribute.Text;
    Image: Attribute.Media<'images'>;
    Title: Attribute.Relation<
      'shared.noodles-card',
      'oneToOne',
      'api::title.title'
    >;
    Theme: Attribute.Relation<
      'shared.noodles-card',
      'oneToOne',
      'api::theme.theme'
    >;
    CTA: Attribute.Relation<
      'shared.noodles-card',
      'oneToOne',
      'api::button.button'
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
    Name: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Image: Attribute.Media<'images'>;
    AltText: Attribute.String;
    IsIcon: Attribute.Boolean;
    URL: Attribute.String;
    Open: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedImageCard extends Schema.Component {
  collectionName: 'components_shared_image_cards';
  info: {
    displayName: 'imageCard';
    description: '';
  };
  attributes: {
    Title: Attribute.Relation<
      'shared.image-card',
      'oneToOne',
      'api::title.title'
    >;
    Text: Attribute.Text;
    Label: Attribute.String;
    URL: Attribute.String;
    LinkTitle: Attribute.String;
    Open: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedHeading extends Schema.Component {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'heading';
    description: '';
  };
  attributes: {
    Alignment: Attribute.Enumeration<['left', 'center']>;
    Level: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<2>;
    Title: Attribute.Relation<'shared.heading', 'oneToOne', 'api::title.title'>;
  };
}

export interface SharedGridBlock extends Schema.Component {
  collectionName: 'components_shared_grid_blocks';
  info: {
    displayName: 'gridBlock';
    description: '';
  };
  attributes: {
    Text: Attribute.Text;
    Label: Attribute.String;
    URL: Attribute.String;
    Open: Attribute.Boolean & Attribute.DefaultTo<false>;
    Image: Attribute.Media<'images'>;
    Title: Attribute.Relation<
      'shared.grid-block',
      'oneToOne',
      'api::title.title'
    >;
    Theme: Attribute.Relation<
      'shared.grid-block',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SharedContactColumn extends Schema.Component {
  collectionName: 'components_shared_contact_columns';
  info: {
    displayName: 'ContactColumn';
    description: '';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 42;
      }>;
    Label: Attribute.String & Attribute.Required;
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Title: Attribute.Relation<
      'shared.contact-column',
      'oneToOne',
      'api::title.title'
    >;
  };
}

export interface SharedColumnCard extends Schema.Component {
  collectionName: 'components_shared_column_cards';
  info: {
    displayName: 'columnCard';
    description: '';
  };
  attributes: {
    LinkedPage: Attribute.Relation<
      'shared.column-card',
      'oneToOne',
      'api::article.article'
    >;
    LinkText: Attribute.String;
    Title: Attribute.Relation<
      'shared.column-card',
      'oneToOne',
      'api::title.title'
    >;
    Text: Attribute.Text;
    Image: Attribute.Relation<
      'shared.column-card',
      'oneToOne',
      'api::image.image'
    >;
    URL: Attribute.String;
  };
}

export interface SharedColor extends Schema.Component {
  collectionName: 'components_shared_colors';
  info: {
    displayName: 'theme';
    description: '';
  };
  attributes: {
    Color: Attribute.Enumeration<
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
    BgColor: Attribute.Enumeration<
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
    Label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 32;
      }>;
    Type: Attribute.Enumeration<['nav', 'main', 'inverted', 'outline', 'form']>;
    URL: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    ButtonTheme: Attribute.Relation<
      'shared.button',
      'oneToOne',
      'api::button-theme.button-theme'
    >;
  };
}

export interface SharedArticleCategory extends Schema.Component {
  collectionName: 'components_shared_article_categories';
  info: {
    displayName: 'ArticleCategory';
  };
  attributes: {
    slug: Attribute.String;
    label: Attribute.String;
    description: Attribute.Text;
    articles: Attribute.Relation<
      'shared.article-category',
      'oneToMany',
      'api::article.article'
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
    Color: Attribute.Enumeration<
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
    BgColor: Attribute.Enumeration<
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
    BorderColor: Attribute.Enumeration<
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
    ActiveColor: Attribute.Enumeration<
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
    ActiveBgColor: Attribute.Enumeration<
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
    ActiveBorderColor: Attribute.Enumeration<
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

export interface SharedAccordionItem extends Schema.Component {
  collectionName: 'components_shared_accordion_items';
  info: {
    displayName: 'AccordionItem';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    ShortDescription: Attribute.String & Attribute.Required;
    LongDescription: Attribute.Text;
    Button: Attribute.Relation<
      'shared.accordion-item',
      'oneToOne',
      'api::button.button'
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
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Image: Attribute.Component<'shared.image'>;
    IsLargeImage: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Title: Attribute.Component<'shared.heading'>;
    Text: Attribute.String;
    CTA: Attribute.Component<'shared.button'>;
    BackgroundColor: Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    IsTextBox: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionsTwoColumns extends Schema.Component {
  collectionName: 'components_sections_two_columns';
  info: {
    displayName: 'TwoColumns';
    description: '';
  };
  attributes: {
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Ratio: Attribute.Enumeration<['one:one', 'two:one']>;
    Theme: Attribute.Relation<
      'sections.two-columns',
      'oneToOne',
      'api::theme.theme'
    >;
    Column: Attribute.Relation<
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
    SocialMedia: Attribute.Relation<
      'sections.top-stripe',
      'oneToMany',
      'api::social-media.social-media'
    >;
    Theme: Attribute.Relation<
      'sections.top-stripe',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsTimeline extends Schema.Component {
  collectionName: 'components_sections_timelines';
  info: {
    displayName: 'Timeline';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'shared.heading'>;
    Card: Attribute.Component<'shared.timeline-card', true>;
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Theme: Attribute.Relation<
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
    Card: Attribute.Component<'shared.testimonials-card', true>;
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Theme: Attribute.Relation<
      'sections.testimonials',
      'oneToOne',
      'api::theme.theme'
    >;
    Title: Attribute.Relation<
      'sections.testimonials',
      'oneToOne',
      'api::title.title'
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
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Title: Attribute.Component<'shared.heading'>;
    Text: Attribute.Text;
    Image: Attribute.Component<'shared.image'> & Attribute.Required;
    CTA1: Attribute.Component<'shared.button'>;
    CTA2: Attribute.Component<'shared.button'>;
    Theme: Attribute.Relation<
      'sections.secondary-banner',
      'oneToOne',
      'api::theme.theme'
    >;
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
    Content: Attribute.RichText;
  };
}

export interface SectionsPersonellCards extends Schema.Component {
  collectionName: 'components_sections_personell_cards';
  info: {
    displayName: 'Personell\u0421ards';
    description: '';
  };
  attributes: {
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Title: Attribute.Component<'shared.heading'>;
    Card: Attribute.Component<'shared.personellcard', true>;
  };
}

export interface SectionsOverlayBlockTest extends Schema.Component {
  collectionName: 'components_sections_overlay_block_tests';
  info: {
    displayName: 'overlayBlockTest';
    description: '';
  };
  attributes: {
    Theme: Attribute.Relation<
      'sections.overlay-block-test',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsInfoCardsTypeA extends Schema.Component {
  collectionName: 'components_sections_info_cards_type_as';
  info: {
    displayName: 'InformationCards';
    description: '';
  };
  attributes: {
    Button: Attribute.Component<'shared.button'>;
    Card: Attribute.Component<'shared.noodles-card', true>;
    Theme: Attribute.Relation<
      'sections.info-cards-type-a',
      'oneToOne',
      'api::theme.theme'
    >;
    Title: Attribute.Relation<
      'sections.info-cards-type-a',
      'oneToOne',
      'api::title.title'
    >;
    Text: Attribute.Text;
  };
}

export interface SectionsImageBanner extends Schema.Component {
  collectionName: 'components_sections_image_banners';
  info: {
    displayName: 'imageBanner';
    description: '';
  };
  attributes: {
    Card: Attribute.Component<'shared.image-card'>;
    Image: Attribute.Media<'images'>;
    Theme: Attribute.Relation<
      'sections.image-banner',
      'oneToOne',
      'api::theme.theme'
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
    Image: Attribute.Media<'images'>;
    CTA: Attribute.Component<'shared.button'>;
    OverlayBlock: Attribute.Component<'shared.overlay-block'>;
  };
}

export interface SectionsGetInTouchForm extends Schema.Component {
  collectionName: 'components_sections_get_in_touch_forms';
  info: {
    displayName: 'GetInTouchForm';
    description: '';
  };
  attributes: {
    Text: Attribute.Text;
    URL: Attribute.String;
    ShowWave: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    FormId: Attribute.String;
    Title: Attribute.Relation<
      'sections.get-in-touch-form',
      'oneToOne',
      'api::title.title'
    >;
  };
}

export interface SectionsEmailForm extends Schema.Component {
  collectionName: 'components_sections_email_forms';
  info: {
    displayName: 'emailForm';
    description: '';
  };
  attributes: {
    Text: Attribute.Text;
    URL: Attribute.String;
    Title: Attribute.Relation<
      'sections.email-form',
      'oneToOne',
      'api::title.title'
    >;
  };
}

export interface SectionsContactBanner extends Schema.Component {
  collectionName: 'components_sections_contact_banners';
  info: {
    displayName: 'ContactBanner';
    description: '';
  };
  attributes: {
    Column: Attribute.Component<'shared.contact-column', true>;
    Theme: Attribute.Relation<
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
    Heading: Attribute.Component<'shared.heading'>;
    CTA: Attribute.Component<'shared.button'>;
    ShowWave: Attribute.Boolean & Attribute.DefaultTo<false>;
    Theme: Attribute.Relation<
      'sections.columns',
      'oneToOne',
      'api::theme.theme'
    >;
    Articles: Attribute.Relation<
      'sections.columns',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface SectionsColumnsWithTabs extends Schema.Component {
  collectionName: 'components_sections_columns_with_tabs';
  info: {
    displayName: 'columnsWithTabs';
    description: '';
  };
  attributes: {
    CTA: Attribute.Component<'shared.button'>;
    MaxCardsToDisplay: Attribute.Integer & Attribute.DefaultTo<3>;
    TabTheme: Attribute.Component<'shared.article-category-tab'>;
    TabCardTheme: Attribute.Component<'shared.tab-card-theme'>;
  };
}

export interface SectionsChart extends Schema.Component {
  collectionName: 'components_sections_charts';
  info: {
    displayName: 'Chart';
    description: '';
  };
  attributes: {
    Outline: Attribute.Boolean & Attribute.DefaultTo<false>;
    URL: Attribute.String;
    Title: Attribute.Relation<'sections.chart', 'oneToOne', 'api::title.title'>;
  };
}

export interface SectionsCarousel extends Schema.Component {
  collectionName: 'components_sections_carousels';
  info: {
    displayName: 'carousel';
    description: '';
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Title: Attribute.Component<'shared.heading'>;
    Elements: Attribute.Component<'shared.image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    CTA: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsBlocksGrid extends Schema.Component {
  collectionName: 'components_sections_blocks_grids';
  info: {
    displayName: 'blocksGrid';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Block: Attribute.Component<'shared.grid-block', true>;
    Theme: Attribute.Relation<
      'sections.blocks-grid',
      'oneToOne',
      'api::theme.theme'
    >;
  };
}

export interface SectionsAccordion extends Schema.Component {
  collectionName: 'components_sections_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'shared.heading'>;
    ExpandLink: Attribute.Relation<
      'sections.accordion',
      'oneToOne',
      'api::link.link'
    >;
    CollapseLink: Attribute.Relation<
      'sections.accordion',
      'oneToOne',
      'api::link.link'
    >;
    Item: Attribute.Component<'shared.accordion-item', true>;
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
      'shared.article-category': SharedArticleCategory;
      'shared.article-category-tab': SharedArticleCategoryTab;
      'shared.accordion-item': SharedAccordionItem;
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
      'sections.accordion': SectionsAccordion;
      'meta.metadata': MetaMetadata;
    }
  }
}
