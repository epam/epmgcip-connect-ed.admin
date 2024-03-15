import type { Schema, Attribute } from '@strapi/strapi';

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

export interface SectionsHeroBanner extends Schema.Component {
  collectionName: 'components_sections_hero_banners';
  info: {
    displayName: 'heroBanner';
    description: '';
  };
  attributes: {
    coverImage: Attribute.Media;
    cta: Attribute.Component<'shared.button'>;
    overlayBlock: Attribute.Component<'shared.overlay-block'>;
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
    image: Attribute.Media;
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

export interface SectionsTopStripe extends Schema.Component {
  collectionName: 'components_sections_top_stripes';
  info: {
    displayName: 'stripe';
    description: '';
  };
  attributes: {
    socialMedia: Attribute.Component<'shared.social-icon', true>;
    theme: Attribute.Component<'shared.color'>;
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
    label: Attribute.String;
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
    linkIcon: Attribute.Media;
    linkTitle: Attribute.String;
    linkNewTab: Attribute.Boolean;
    image: Attribute.Media;
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
    linkIcon: Attribute.Media;
    linkTitle: Attribute.String;
    linkNewTab: Attribute.Boolean;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    altText: Attribute.String;
    isIcon: Attribute.Boolean;
    url: Attribute.String;
    newTab: Attribute.Boolean;
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
    image: Attribute.Media;
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
    image: Attribute.Media;
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
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialIcon extends Schema.Component {
  collectionName: 'components_shared_social_icons';
  info: {
    displayName: 'icon';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    url: Attribute.String;
    newTab: Attribute.Boolean;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Attribute.Media;
    cover: Attribute.Media;
    altText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.metadata': MetaMetadata;
      'sections.blocks-grid': SectionsBlocksGrid;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.image-banner': SectionsImageBanner;
      'sections.info-cards-type-a': SectionsInfoCardsTypeA;
      'sections.rich-text': SectionsRichText;
      'sections.top-stripe': SectionsTopStripe;
      'shared.button': SharedButton;
      'shared.color': SharedColor;
      'shared.grid-block': SharedGridBlock;
      'shared.image-card': SharedImageCard;
      'shared.image': SharedImage;
      'shared.meta-social': SharedMetaSocial;
      'shared.noodles-card': SharedNoodlesCard;
      'shared.overlay-block': SharedOverlayBlock;
      'shared.seo': SharedSeo;
      'shared.social-icon': SharedSocialIcon;
      'shared.video': SharedVideo;
    }
  }
}
