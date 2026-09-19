# net.minecraft.client.renderer.vertex

- [DefaultVertexFormats](#defaultvertexformats)
- [VertexBuffer](#vertexbuffer)
- [VertexFormat](#vertexformat)
- [VertexFormatElement](#vertexformatelement)
- [VertexFormatElement.EnumType](#vertexformatelement.enumtype)
- [VertexFormatElement.EnumUsage](#vertexformatelement.enumusage)
## DefaultVertexFormats

*class* `net.minecraft.client.renderer.vertex.DefaultVertexFormats`

### Fields
- `public static final VertexFormat BLOCK`
- `public static final VertexFormat ITEM`
- `public static final VertexFormat OLDMODEL_POSITION_TEX_NORMAL`
- `public static final VertexFormat PARTICLE_POSITION_TEX_COLOR_LMAP`
- `public static final VertexFormat POSITION`
- `public static final VertexFormat POSITION_COLOR`
- `public static final VertexFormat POSITION_TEX`
- `public static final VertexFormat POSITION_NORMAL`
- `public static final VertexFormat POSITION_TEX_COLOR`
- `public static final VertexFormat POSITION_TEX_NORMAL`
- `public static final VertexFormat POSITION_TEX_LMAP_COLOR`
- `public static final VertexFormat POSITION_TEX_COLOR_NORMAL`
- `public static final VertexFormatElement POSITION_3F`
- `public static final VertexFormatElement COLOR_4UB`
- `public static final VertexFormatElement TEX_2F`
- `public static final VertexFormatElement TEX_2S`
- `public static final VertexFormatElement NORMAL_3B`
- `public static final VertexFormatElement PADDING_1B`

## VertexBuffer

*class* `net.minecraft.client.renderer.vertex.VertexBuffer`

### Methods
- `public void bindBuffer()`
- `public void bufferData(java.nio.ByteBuffer data)`
- `public void drawArrays(int mode)`
- `public void unbindBuffer()`
- `public void deleteGlBuffers()`

## VertexFormat

*class* `net.minecraft.client.renderer.vertex.VertexFormat`

### Methods
- `public void clear()`
- `public VertexFormat addElement(VertexFormatElement element)`
- `public boolean hasNormal()`
- `public int getNormalOffset()`
- `public boolean hasColor()`
- `public int getColorOffset()`
- `public boolean hasUvOffset(int id)`
- `public int getUvOffsetById(int id)`
- `public java.lang.String toString()`
- `public int getIntegerSize()`
- `public int getNextOffset()`
- `public java.util.List<VertexFormatElement> getElements()`
- `public int getElementCount()`
- `public VertexFormatElement getElement(int index)`
- `public int getOffset(int index)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## VertexFormatElement

*class* `net.minecraft.client.renderer.vertex.VertexFormatElement`

### Methods
- `public final VertexFormatElement.EnumType getType()`
- `public final VertexFormatElement.EnumUsage getUsage()`
- `public final int getElementCount()`
- `public final int getIndex()`
- `public java.lang.String toString()`
- `public final int getSize()`
- `public final boolean isPositionElement()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`

## VertexFormatElement.EnumType

*enum* `net.minecraft.client.renderer.vertex.VertexFormatElement.EnumType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<VertexFormatElement.EnumType>

Enclosing class: VertexFormatElement

### Fields
- `public static final VertexFormatElement.EnumType FLOAT`
- `public static final VertexFormatElement.EnumType UBYTE`
- `public static final VertexFormatElement.EnumType BYTE`
- `public static final VertexFormatElement.EnumType USHORT`
- `public static final VertexFormatElement.EnumType SHORT`
- `public static final VertexFormatElement.EnumType UINT`
- `public static final VertexFormatElement.EnumType INT`

### Methods
- `public static VertexFormatElement.EnumType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (VertexFormatElement.EnumType c : VertexFormatElement.EnumType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static VertexFormatElement.EnumType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getSize()`
- `public java.lang.String getDisplayName()`
- `public int getGlConstant()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## VertexFormatElement.EnumUsage

*enum* `net.minecraft.client.renderer.vertex.VertexFormatElement.EnumUsage`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<VertexFormatElement.EnumUsage>

Enclosing class: VertexFormatElement

### Fields
- `public static final VertexFormatElement.EnumUsage POSITION`
- `public static final VertexFormatElement.EnumUsage NORMAL`
- `public static final VertexFormatElement.EnumUsage COLOR`
- `public static final VertexFormatElement.EnumUsage UV`
- `@Deprecated public static final VertexFormatElement.EnumUsage MATRIX` (deprecated)
  Deprecated.
- `@Deprecated public static final VertexFormatElement.EnumUsage BLEND_WEIGHT` (deprecated)
  Deprecated.
- `public static final VertexFormatElement.EnumUsage PADDING`
- `public static final VertexFormatElement.EnumUsage GENERIC`

### Methods
- `public static VertexFormatElement.EnumUsage[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (VertexFormatElement.EnumUsage c : VertexFormatElement.EnumUsage.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static VertexFormatElement.EnumUsage valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void preDraw(VertexFormat format,  int element,  int stride,  java.nio.ByteBuffer buffer)`
- `public void postDraw(VertexFormat format,  int element,  int stride,  java.nio.ByteBuffer buffer)`
- `public java.lang.String getDisplayName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
