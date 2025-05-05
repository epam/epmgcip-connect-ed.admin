import type { Schema, Struct } from '@strapi/strapi';

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    CollapseLink: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    ExpandLink: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    Item: Schema.Attribute.Component<'shared.accordion-item', true>;
    Title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsBlocksGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_blocks_grids';
  info: {
    description: '';
    displayName: 'blocksGrid';
  };
  attributes: {
    Block: Schema.Attribute.Component<'shared.grid-block', true>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.String;
  };
}

export interface SectionsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_carousels';
  info: {
    description: '';
    displayName: 'carousel';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.button', false>;
    Elements: Schema.Attribute.Component<'shared.image', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsChart extends Struct.ComponentSchema {
  collectionName: 'components_sections_charts';
  info: {
    description: '';
    displayName: 'Chart';
  };
  attributes: {
    Outline: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SectionsColumns extends Struct.ComponentSchema {
  collectionName: 'components_sections_columns';
  info: {
    description: '';
    displayName: 'columns';
  };
  attributes: {
    Articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    CTA: Schema.Attribute.Component<'shared.button', false>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsColumnsWithTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_columns_with_tabs';
  info: {
    description: '';
    displayName: 'columnsWithTabs';
  };
  attributes: {
    MaxCardsToDisplay: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    Tabs: Schema.Attribute.Relation<
      'oneToMany',
      'api::tab-container.tab-container'
    >;
  };
}

export interface SectionsContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_banners';
  info: {
    description: '';
    displayName: 'ContactBanner';
  };
  attributes: {
    Column: Schema.Attribute.Component<'shared.contact-column', true>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsEmailForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_email_forms';
  info: {
    description: '';
    displayName: 'emailForm';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SectionsGetInTouchForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_get_in_touch_forms';
  info: {
    description: '';
    displayName: 'GetInTouchForm';
  };
  attributes: {
    FormId: Schema.Attribute.String;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SectionsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_banners';
  info: {
    description: '';
    displayName: 'heroBanner';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'shared.button', false>;
    Image: Schema.Attribute.Media<'images'>;
    OverlayBlock: Schema.Attribute.Component<'shared.overlay-block', false>;
  };
}

export interface SectionsImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_banners';
  info: {
    description: '';
    displayName: 'imageBanner';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.image-card', false>;
    Image: Schema.Attribute.Media<'images'>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsInfoCardsTypeA extends Struct.ComponentSchema {
  collectionName: 'components_sections_info_cards_type_as';
  info: {
    description: '';
    displayName: 'InformationCards';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    Card: Schema.Attribute.Component<'shared.noodles-card', true>;
    Text: Schema.Attribute.Text;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SectionsOverlayBlockTest extends Struct.ComponentSchema {
  collectionName: 'components_sections_overlay_block_tests';
  info: {
    description: '';
    displayName: 'overlayBlockTest';
  };
  attributes: {
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsPersonellCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_personell_cards';
  info: {
    description: '';
    displayName: 'Personell\u0421ards';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.personellcard', true>;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    description: '';
    displayName: 'richText';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
  };
}

export interface SectionsSecondaryBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_secondary_banners';
  info: {
    description: '';
    displayName: 'secondaryBanner';
  };
  attributes: {
    CTA1: Schema.Attribute.Component<'shared.button', false>;
    CTA2: Schema.Attribute.Component<'shared.button', false>;
    Image: Schema.Attribute.Component<'shared.image', false> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Text: Schema.Attribute.Text;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.testimonials-card', true>;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SectionsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_sections_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.timeline-card', true>;
    Heading: Schema.Attribute.Component<'shared.heading', false>;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsTopStripe extends Struct.ComponentSchema {
  collectionName: 'components_sections_top_stripes';
  info: {
    description: '';
    displayName: 'stripe';
  };
  attributes: {
    SocialMedia: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-media.social-media'
    >;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_sections_two_columns';
  info: {
    description: '';
    displayName: 'TwoColumns';
  };
  attributes: {
    Column: Schema.Attribute.Relation<'oneToOne', 'api::column.column'>;
    Ratio: Schema.Attribute.Enumeration<['one:one', 'two:one']>;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
  };
}

export interface SectionsWaveBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_wave_banners';
  info: {
    description: '';
    displayName: 'waveBanner';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    CTA: Schema.Attribute.Component<'shared.button', false>;
    Image: Schema.Attribute.Component<'shared.image', false>;
    IsLargeImage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    IsTextBox: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Text: Schema.Attribute.String;
    Title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsWaysToDonate extends Struct.ComponentSchema {
  collectionName: 'components_sections_ways_to_donates';
  info: {
    description: '';
    displayName: 'WaysToDonate';
  };
  attributes: {
    Card: Schema.Attribute.Component<'shared.card', false>;
    Tabs: Schema.Attribute.Relation<
      'oneToMany',
      'api::tab-container.tab-container'
    >;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
  };
  attributes: {
    Button: Schema.Attribute.Relation<'oneToOne', 'api::button.button'>;
    LongDescription: Schema.Attribute.Text;
    ShortDescription: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface SharedArticleCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_article_categories';
  info: {
    description: '';
    displayName: 'ArticleCategory';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'shared.article-category-tab', true>;
  };
}

export interface SharedArticleCategoryTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_article_category_tabs';
  info: {
    description: '';
    displayName: 'articleCategoryTabTheme';
  };
  attributes: {
    ActiveBgColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    ActiveBorderColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    ActiveColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    BgColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    BorderColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    Color: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    ButtonTheme: Schema.Attribute.Relation<
      'oneToOne',
      'api::button-theme.button-theme'
    >;
    Label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 32;
      }>;
    Type: Schema.Attribute.Enumeration<
      ['nav', 'main', 'inverted', 'outline', 'form']
    >;
    URL: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    Link: Schema.Attribute.Relation<'oneToOne', 'api::button.button'>;
    qrCodeLink: Schema.Attribute.String;
    Text: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedColor extends Struct.ComponentSchema {
  collectionName: 'components_shared_colors';
  info: {
    description: '';
    displayName: 'theme';
  };
  attributes: {
    BgColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    Color: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
  };
}

export interface SharedColumnCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_column_cards';
  info: {
    description: '';
    displayName: 'columnCard';
  };
  attributes: {
    Image: Schema.Attribute.Relation<'oneToOne', 'api::image.image'>;
    LinkedPage: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    LinkText: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedContactColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_columns';
  info: {
    description: '';
    displayName: 'ContactColumn';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    ShowWave: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 42;
      }>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedGridBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_grid_blocks';
  info: {
    description: '';
    displayName: 'gridBlock';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Label: Schema.Attribute.String;
    Open: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.Text;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    description: '';
    displayName: 'heading';
  };
  attributes: {
    Alignment: Schema.Attribute.Enumeration<['left', 'center']>;
    Level: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<2>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    AltText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    IsIcon: Schema.Attribute.Boolean;
    Name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    Open: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedImageCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_cards';
  info: {
    description: '';
    displayName: 'imageCard';
  };
  attributes: {
    Label: Schema.Attribute.String;
    LinkTitle: Schema.Attribute.String;
    Open: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedNoodlesCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_noodles_cards';
  info: {
    description: '';
    displayName: 'infoCardTypeA';
  };
  attributes: {
    CTA: Schema.Attribute.Relation<'oneToOne', 'api::button.button'>;
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.Text;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedOverlayBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_overlay_blocks';
  info: {
    description: '';
    displayName: 'overlayBlock';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedPersonellcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_personellcards';
  info: {
    description: '';
    displayName: 'Personell\u0421ard';
  };
  attributes: {
    Image: Schema.Attribute.Relation<'oneToOne', 'api::image.image'>;
    SocialMedias: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-media.social-media'
    >;
    Text: Schema.Attribute.String & Schema.Attribute.Required;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedTabCardTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_card_themes';
  info: {
    description: '';
    displayName: 'tabCardTheme';
  };
  attributes: {
    BgColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    Color: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    LinkColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
  };
}

export interface SharedTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabs';
  info: {
    description: '';
    displayName: 'Tabs';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    TabContent: Schema.Attribute.Relation<
      'oneToOne',
      'api::tab-content.tab-content'
    >;
  };
}

export interface SharedTestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials_cards';
  info: {
    description: '';
    displayName: 'TestimonialCard';
  };
  attributes: {
    Author: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images', true>;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedTimelineCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_cards';
  info: {
    description: '';
    displayName: 'TimelineCard';
  };
  attributes: {
    Image: Schema.Attribute.Relation<'oneToOne', 'api::image.image'>;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
    Theme: Schema.Attribute.Relation<'oneToOne', 'api::theme.theme'>;
    Title: Schema.Attribute.Relation<'oneToOne', 'api::title.title'>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    altText: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface SharedWave extends Struct.ComponentSchema {
  collectionName: 'components_shared_waves';
  info: {
    description: '';
    displayName: 'wave';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      [
        'white',
        'black',
        'background',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'quinary',
      ]
    >;
    direction: Schema.Attribute.Enumeration<['ltr', 'rtl']> &
      Schema.Attribute.DefaultTo<'ltr'>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.metadata': MetaMetadata;
      'sections.accordion': SectionsAccordion;
      'sections.blocks-grid': SectionsBlocksGrid;
      'sections.carousel': SectionsCarousel;
      'sections.chart': SectionsChart;
      'sections.columns': SectionsColumns;
      'sections.columns-with-tabs': SectionsColumnsWithTabs;
      'sections.contact-banner': SectionsContactBanner;
      'sections.email-form': SectionsEmailForm;
      'sections.get-in-touch-form': SectionsGetInTouchForm;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.image-banner': SectionsImageBanner;
      'sections.info-cards-type-a': SectionsInfoCardsTypeA;
      'sections.overlay-block-test': SectionsOverlayBlockTest;
      'sections.personell-cards': SectionsPersonellCards;
      'sections.rich-text': SectionsRichText;
      'sections.secondary-banner': SectionsSecondaryBanner;
      'sections.testimonials': SectionsTestimonials;
      'sections.timeline': SectionsTimeline;
      'sections.top-stripe': SectionsTopStripe;
      'sections.two-columns': SectionsTwoColumns;
      'sections.wave-banner': SectionsWaveBanner;
      'sections.ways-to-donate': SectionsWaysToDonate;
      'shared.accordion-item': SharedAccordionItem;
      'shared.article-category': SharedArticleCategory;
      'shared.article-category-tab': SharedArticleCategoryTab;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.color': SharedColor;
      'shared.column-card': SharedColumnCard;
      'shared.contact-column': SharedContactColumn;
      'shared.grid-block': SharedGridBlock;
      'shared.heading': SharedHeading;
      'shared.image': SharedImage;
      'shared.image-card': SharedImageCard;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.noodles-card': SharedNoodlesCard;
      'shared.overlay-block': SharedOverlayBlock;
      'shared.personellcard': SharedPersonellcard;
      'shared.seo': SharedSeo;
      'shared.tab-card-theme': SharedTabCardTheme;
      'shared.tabs': SharedTabs;
      'shared.testimonials-card': SharedTestimonialsCard;
      'shared.timeline-card': SharedTimelineCard;
      'shared.video': SharedVideo;
      'shared.wave': SharedWave;
    }
  }
}
