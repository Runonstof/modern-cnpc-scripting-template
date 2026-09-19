# net.minecraftforge.fml.common.asm

- [ASMTransformerWrapper](#asmtransformerwrapper)
- [ASMTransformerWrapper.TransformerWrapper](#asmtransformerwrapper.transformerwrapper)
- [FMLSanityChecker](#fmlsanitychecker)
- [ReobfuscationMarker](#reobfuscationmarker)
## ASMTransformerWrapper

*class* `net.minecraftforge.fml.common.asm.ASMTransformerWrapper`

### Methods
- `public static java.lang.String getTransformerWrapper(LaunchClassLoader launchLoader,  java.lang.String parentClass,  java.lang.String coreMod)`

## ASMTransformerWrapper.TransformerWrapper

*class* `net.minecraftforge.fml.common.asm.ASMTransformerWrapper.TransformerWrapper`

Enclosing class: ASMTransformerWrapper

### Methods
- `public byte[] transform(java.lang.String name,  java.lang.String transformedName,  byte[] basicClass)`
- `public java.lang.String toString()`
- `protected abstract java.lang.String getParentClass()`
- `protected abstract java.lang.String getCoreMod()`

## FMLSanityChecker

*class* `net.minecraftforge.fml.common.asm.FMLSanityChecker`

All Implemented Interfaces: java.util.concurrent.Callable<java.lang.Void>, IFMLCallHook

### Fields
- `public static java.io.File fmlLocation`

### Methods
- `public java.lang.Void call()  throws java.lang.Exception`
  - throws: java.lang.Exception
- `public void injectData(java.util.Map<java.lang.String,java.lang.Object> data)`
  Description copied from interface: IFMLCallHook
  Injected with data from the FML environment:
   "classLoader" : The FML Class Loader

## ReobfuscationMarker

*annotation* `net.minecraftforge.fml.common.asm.ReobfuscationMarker`

Used to force certain classes to reobfuscate
