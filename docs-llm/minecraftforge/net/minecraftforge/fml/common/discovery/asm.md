# net.minecraftforge.fml.common.discovery.asm

- [ASMModParser](#asmmodparser)
- [ModAnnotation](#modannotation)
- [ModAnnotation.EnumHolder](#modannotation.enumholder)
- [ModAnnotationVisitor](#modannotationvisitor)
- [ModClassVisitor](#modclassvisitor)
- [ModFieldVisitor](#modfieldvisitor)
- [ModMethodVisitor](#modmethodvisitor)
## ASMModParser

*class* `net.minecraftforge.fml.common.discovery.asm.ASMModParser`

### Methods
- `public void beginNewTypeName(java.lang.String typeQName,  int classVersion,  java.lang.String superClassQName,  java.lang.String[] interfaces)`
- `public void startClassAnnotation(java.lang.String annotationName)`
- `public void addAnnotationProperty(java.lang.String key,  java.lang.Object value)`
- `public void startFieldAnnotation(java.lang.String fieldName,  java.lang.String annotationName)`
- `public java.lang.String toString()`
- `public Type getASMType()`
- `public int getClassVersion()`
- `public Type getASMSuperType()`
- `public java.util.LinkedList<ModAnnotation> getAnnotations()`
- `public void validate()`
- `public void sendToTable(ASMDataTable table,  ModCandidate candidate)`
- `public void addAnnotationArray(java.lang.String name)`
- `public void addAnnotationEnumProperty(java.lang.String name,  java.lang.String desc,  java.lang.String value)`
- `public void endArray()`
- `public void addSubAnnotation(java.lang.String name,  java.lang.String desc)`
- `public void endSubAnnotation()`
- `public void startMethodAnnotation(java.lang.String methodName,  java.lang.String methodDescriptor,  java.lang.String annotationName)`

## ModAnnotation

*class* `net.minecraftforge.fml.common.discovery.asm.ModAnnotation`

### Methods
- `public java.lang.String toString()`
- `public net.minecraftforge.fml.common.discovery.asm.ASMModParser.AnnotationType getType()`
- `public Type getASMType()`
- `public java.lang.String getMember()`
- `public java.util.Map<java.lang.String,java.lang.Object> getValues()`
- `public void addArray(java.lang.String name)`
- `public void addProperty(java.lang.String key,  java.lang.Object value)`
- `public void addEnumProperty(java.lang.String key,  java.lang.String enumName,  java.lang.String value)`
- `public void endArray()`
- `public ModAnnotation addChildAnnotation(java.lang.String name,  java.lang.String desc)`

## ModAnnotation.EnumHolder

*class* `net.minecraftforge.fml.common.discovery.asm.ModAnnotation.EnumHolder`

Enclosing class: ModAnnotation

### Methods
- `public java.lang.String getDesc()`
- `public java.lang.String getValue()`

## ModAnnotationVisitor

*class* `net.minecraftforge.fml.common.discovery.asm.ModAnnotationVisitor`

### Methods
- `public void visit(java.lang.String key,  java.lang.Object value)`
- `public void visitEnum(java.lang.String name,  java.lang.String desc,  java.lang.String value)`
- `public AnnotationVisitor visitArray(java.lang.String name)`
- `public AnnotationVisitor visitAnnotation(java.lang.String name,  java.lang.String desc)`
- `public void visitEnd()`

## ModClassVisitor

*class* `net.minecraftforge.fml.common.discovery.asm.ModClassVisitor`

### Methods
- `public void visit(int version,  int access,  java.lang.String name,  java.lang.String signature,  java.lang.String superName,  java.lang.String[] interfaces)`
- `public AnnotationVisitor visitAnnotation(java.lang.String annotationName,  boolean runtimeVisible)`
- `public FieldVisitor visitField(int access,  java.lang.String name,  java.lang.String desc,  java.lang.String signature,  java.lang.Object value)`
- `public MethodVisitor visitMethod(int access,  java.lang.String name,  java.lang.String desc,  java.lang.String signature,  java.lang.String[] exceptions)`

## ModFieldVisitor

*class* `net.minecraftforge.fml.common.discovery.asm.ModFieldVisitor`

### Methods
- `public AnnotationVisitor visitAnnotation(java.lang.String annotationName,  boolean runtimeVisible)`

## ModMethodVisitor

*class* `net.minecraftforge.fml.common.discovery.asm.ModMethodVisitor`

### Methods
- `public AnnotationVisitor visitAnnotation(java.lang.String annotationName,  boolean runtimeVisible)`
