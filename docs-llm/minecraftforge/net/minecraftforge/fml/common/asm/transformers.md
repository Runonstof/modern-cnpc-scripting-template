# net.minecraftforge.fml.common.asm.transformers

- [AccessTransformer](#accesstransformer)
- [DeobfuscationTransformer](#deobfuscationtransformer)
- [EventSubscriberTransformer](#eventsubscribertransformer)
- [EventSubscriptionTransformer](#eventsubscriptiontransformer)
- [FieldRedirectTransformer](#fieldredirecttransformer)
- [ItemBlockSpecialTransformer](#itemblockspecialtransformer)
- [ItemBlockTransformer](#itemblocktransformer)
- [ItemStackTransformer](#itemstacktransformer)
- [MarkerTransformer](#markertransformer)
- [ModAccessTransformer](#modaccesstransformer)
- [ModAPITransformer](#modapitransformer)
- [PatchingTransformer](#patchingtransformer)
- [PotionEffectTransformer](#potioneffecttransformer)
- [SideTransformer](#sidetransformer)
- [SoundEngineFixTransformer](#soundenginefixtransformer)
- [TerminalTransformer](#terminaltransformer)
- [TerminalTransformer.ExitVisitor](#terminaltransformer.exitvisitor)
## AccessTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.AccessTransformer`

### Methods
- `protected void processATFile(CharSource rulesResource)  throws java.io.IOException`
  - throws: java.io.IOException
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`
- `public static void main(java.lang.String[] args)`

## DeobfuscationTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.DeobfuscationTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`
- `public java.lang.String remapClassName(java.lang.String name)`
- `public java.lang.String unmapClassName(java.lang.String name)`

## EventSubscriberTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.EventSubscriberTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`

## EventSubscriptionTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.EventSubscriptionTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`

## FieldRedirectTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.FieldRedirectTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`

## ItemBlockSpecialTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.ItemBlockSpecialTransformer`

### Inherited methods
- from `net.minecraftforge.fml.common.asm.transformers.FieldRedirectTransformer`: `transform`

## ItemBlockTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.ItemBlockTransformer`

### Inherited methods
- from `net.minecraftforge.fml.common.asm.transformers.FieldRedirectTransformer`: `transform`

## ItemStackTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.ItemStackTransformer`

### Inherited methods
- from `net.minecraftforge.fml.common.asm.transformers.FieldRedirectTransformer`: `transform`

## MarkerTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.MarkerTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`
- `public static void main(java.lang.String[] args)`

## ModAccessTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.ModAccessTransformer`

### Fields
- `public static final java.util.jar.Attributes.Name FMLAT`

### Methods
- `public static void addJar(java.util.jar.JarFile jar,  java.lang.String atList)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraftforge.fml.common.asm.transformers.AccessTransformer`: `main`, `processATFile`, `transform`

## ModAPITransformer

*class* `net.minecraftforge.fml.common.asm.transformers.ModAPITransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`
- `public void initTable(ASMDataTable dataTable)`

## PatchingTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.PatchingTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`

## PotionEffectTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.PotionEffectTransformer`

### Inherited methods
- from `net.minecraftforge.fml.common.asm.transformers.FieldRedirectTransformer`: `transform`

## SideTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.SideTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] bytes)`

## SoundEngineFixTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.SoundEngineFixTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`

## TerminalTransformer

*class* `net.minecraftforge.fml.common.asm.transformers.TerminalTransformer`

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`

## TerminalTransformer.ExitVisitor

*class* `net.minecraftforge.fml.common.asm.transformers.TerminalTransformer.ExitVisitor`

Enclosing class: TerminalTransformer

### Methods
- `public void visit(int version,  int access,  java.lang.String name,  java.lang.String signature,  java.lang.String superName,  java.lang.String[] interfaces)`
- `public MethodVisitor visitMethod(int mAccess,  java.lang.String mName,  java.lang.String mDesc,  java.lang.String mSignature,  java.lang.String[] mExceptions)`
- `public static void systemExitCalled(int status)`
- `public static void runtimeExitCalled(java.lang.Runtime runtime,  int status)`
- `public static void runtimeHaltCalled(java.lang.Runtime runtime,  int status)`
