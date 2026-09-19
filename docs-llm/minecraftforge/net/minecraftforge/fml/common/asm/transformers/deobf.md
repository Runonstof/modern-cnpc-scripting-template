# net.minecraftforge.fml.common.asm.transformers.deobf

- [FMLDeobfuscatingRemapper](#fmldeobfuscatingremapper)
- [FMLRemappingAdapter](#fmlremappingadapter)
- [LZMAInputSupplier](#lzmainputsupplier)
## FMLDeobfuscatingRemapper

*class* `net.minecraftforge.fml.common.asm.transformers.deobf.FMLDeobfuscatingRemapper`

### Fields
- `public static final FMLDeobfuscatingRemapper INSTANCE`

### Methods
- `public void setupLoadOnly(java.lang.String deobfFileName,  boolean loadAll)`
- `public void setup(java.io.File mcDir,  LaunchClassLoader classLoader,  java.lang.String deobfFileName)`
- `public boolean isRemappedClass(java.lang.String className)`
- `public java.lang.String mapFieldName(java.lang.String owner,  java.lang.String name,  java.lang.String desc)`
- `public java.lang.String map(java.lang.String typeName)`
- `public java.lang.String unmap(java.lang.String typeName)`
- `public java.lang.String mapMethodName(java.lang.String owner,  java.lang.String name,  java.lang.String desc)`
- `public java.lang.String mapSignature(java.lang.String signature,  boolean typeSignature)`
- `public void mergeSuperMaps(java.lang.String name,  java.lang.String superName,  java.lang.String[] interfaces)`
- `public java.util.Set<java.lang.String> getObfedClasses()`
- `public java.lang.String getStaticFieldType(java.lang.String oldType,  java.lang.String oldName,  java.lang.String newType,  java.lang.String newName)`

## FMLRemappingAdapter

*class* `net.minecraftforge.fml.common.asm.transformers.deobf.FMLRemappingAdapter`

### Methods
- `public void visit(int version,  int access,  java.lang.String name,  java.lang.String signature,  java.lang.String superName,  java.lang.String[] interfaces)`
- `public FieldVisitor visitField(int access,  java.lang.String name,  java.lang.String desc,  java.lang.String signature,  java.lang.Object value)`
- `protected MethodVisitor createRemappingMethodAdapter(int access,  java.lang.String newDesc,  MethodVisitor mv)`

## LZMAInputSupplier

*class* `net.minecraftforge.fml.common.asm.transformers.deobf.LZMAInputSupplier`

### Methods
- `public java.io.InputStream openStream()  throws java.io.IOException`
  - throws: java.io.IOException
