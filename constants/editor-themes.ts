export const DARK_THEME = {
  name: 'Shadcn/colorscheme',
  colors: {
    'editor.background': '#09090B',
    'editor.foreground': '#FFFFFF',
    'activityBarBadge.background': '#27272A',
    'sideBarTitle.foreground': '#FAFAFA',
    'activityBar.background': '#09090B',
    'activityBar.border': '#27272A',
    'activityBar.activeBackground': '#27272A',
    'activityBar.activeBorder': '#ff000000',
    'activityBar.inactiveForeground': '#FAFAFA',
    'tab.activeBackground': '#27272A',
    'tab.inactiveBackground': '#09090B',
    'tab.border': '#27272A',
    'editorGroupHeader.tabsBackground': '#09090B',
    'tab.activeBorder': '#27272A',
    'tab.hoverBorder': '#27272A',
    'tab.activeBorderTop': '#27272A',
    'titleBar.border': '#27272A',
    'titleBar.activeBackground': '#09090B',
    'titleBar.inactiveBackground': '#09090B',
    'button.background': '#FAFAFA',
    'button.foreground': '#18181B',
    'sideBar.background': '#09090B',
    'sideBar.border': '#27272A',
    'statusBar.background': '#27272A',
    'statusBar.border': '#27272A',
    'editorHoverWidget.background': '#09090B',
    'editorHoverWidget.border': '#27272A',
    'editor.selectionBackground': '#9393952f',
    'quickInput.background': '#18181B',
    'quickInputList.focusBackground': '#27272A',
    // "selection.background": "#ff0000"
    // "editor.wordHighlightBackground": "#ff0000"
    // "editor.lineHighlightBackground": "#ff0000"
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: '#404040',
      },
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: '#f5f5f5',
      },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: '#f5f5f5',
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: '#ef4444',
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: '#C490F3',
      },
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.control',
        'constant.other.color',
        'meta.tag',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.section.embedded',
        'keyword.other.template',
        'keyword.other.substitution',
      ],
      settings: {
        foreground: '#C38FF3',
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: '#FFFFFF',
      },
    },
    {
      name: 'Function, Special Method',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method',
      ],
      settings: {
        foreground: '#92F8E5',
      },
    },
    {
      name: 'Block Level Variables',
      scope: ['meta.block variable.other'],
      settings: {
        foreground: '#92F8E5',
      },
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: '#FFF',
      },
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: [
        'constant.numeric',
        'constant.language',
        'support.constant',
        'constant.character',
        'constant.escape',
        'variable.parameter',
        'keyword.other.unit',
        'keyword.other',
      ],
      settings: {
        foreground: '#FFF',
      },
    },
    {
      name: 'Symbols, Inherited Class, Markup Heading',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        foreground: '#FFF',
      },
    },
    {
      name: 'String, editorBracketHighlight',
      scope: ['string', 'editorBracketHighlight'],
      settings: {
        foreground: '#F9D393',
      },
    },
    {
      scope: ['punctuation.brackets.curly', 'punctuation.brackets.round'],
      settings: {
        foreground: '#f1bff4',
        fontStyle: 'bold',
      },
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name',
        'support.type',
        'support.class',
        'support.other.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types',
      ],
      settings: {
        foreground: '#fdba74',
      },
    },
    {
      name: 'Entity Types',
      scope: ['support.type'],
      settings: {
        foreground: '#ecfccb',
      },
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: {
        foreground: '#ecfccb',
      },
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: {
        foreground: '#FFF',
      },
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        fontStyle: 'italic',
        foreground: '#FFF',
      },
    },
    {
      name: 'entity.name.method.js',
      scope: ['entity.name.method.js'],
      settings: {
        fontStyle: 'italic',
        foreground: '#60a5fa',
      },
    },
    {
      name: 'meta.method.js',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'variable.function.constructor',
      ],
      settings: {
        foreground: '#60a5fa',
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: '#FFFFFF',
      },
    },
    {
      name: 'HTML Attributes',
      scope: [
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: '#FFCB6B',
      },
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: '#FFCB6B',
      },
    },
    {
      name: 'CSS ID\'s',
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: '#82AAFF',
      },
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: '#C3E88D',
      },
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: '#89DDFF',
      },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: '#89DDFF',
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: '#82AAFF',
      },
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: {
        fontStyle: 'italic',
        foreground: '#FF5370',
      },
    },
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#c0aa61',
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#F78C6C',
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#C17E70',
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#82AAFF',
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#f07178',
      },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#C3E88D',
      },
    },
    {
      name: 'Markdown - Plain',
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: {
        foreground: '#EEFFFF',
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: [
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
      ],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Markdown - Heading',
      scope: [
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: '#C3E88D',
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: '#f07178',
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: '#f07178',
      },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: '#f07178',
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: '#F78C6C',
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: '#82AAFF',
      },
    },
    {
      name: 'Markdown - Link Description',
      scope: ['string.other.link.description.title.markdown'],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: '#FFCB6B',
      },
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: '#C792EA',
      },
    },
    {
      name: 'Markdown - Raw Block Fenced',
      scope: ['markup.raw.block.fenced.markdown'],
      settings: {
        foreground: '#00000050',
      },
    },
    {
      name: 'Markdown - Fenced Bode Block',
      scope: ['punctuation.definition.fenced.markdown'],
      settings: {
        foreground: '#00000050',
      },
    },
    {
      name: 'Markdown - Fenced Bode Block Variable',
      scope: [
        'markup.raw.block.fenced.markdown',
        'variable.language.fenced.markdown',
        'punctuation.section.class.end',
      ],
      settings: {
        foreground: '#EEFFFF',
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator'],
      settings: {
        fontStyle: 'bold',
        foreground: '#65737E',
      },
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: '#EEFFFF',
      },
    },
  ],
  type: 'dark',
}
