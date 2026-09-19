# com.mojang.blaze3d.preprocessor

- [GlslPreprocessor](#glslpreprocessor)
- [GlslPreprocessor.Context](#glslpreprocessor.context)
## GlslPreprocessor

*class* `com.mojang.blaze3d.preprocessor.GlslPreprocessor`

### Fields
- `private static final String C_COMMENT` (= "/\\*(?:[^*]|\\*+[^*/])*\\*+/")
- `private static final String LINE_COMMENT` (= "//[^\\v]*")
- `private static final Pattern REGEX_MOJ_IMPORT`
- `private static final Pattern REGEX_VERSION`
- `private static final Pattern REGEX_ENDS_WITH_WHITESPACE`

### Methods
- `public List<String> process(String p_166462_)`
- `private List<String> processImports(String p_166470_,  GlslPreprocessor.Context p_166471_,  String p_166472_)`
- `private String processVersions(String p_166467_,  GlslPreprocessor.Context p_166468_)`
- `private String setVersion(String p_166464_,  int p_166465_)`
- `private static boolean isDirectiveEnabled(String p_166474_,  Matcher p_166475_)`
- `private static boolean isDirectiveDisabled(String p_166477_,  Matcher p_166478_,  int p_166479_)`
- `@Nullable public abstract String applyImport(boolean p_166480_,  String p_166481_)`

## GlslPreprocessor.Context

*class* `com.mojang.blaze3d.preprocessor.GlslPreprocessor.Context`

Enclosing class: GlslPreprocessor

### Fields
- `int glslVersion`
- `int sourceId`
