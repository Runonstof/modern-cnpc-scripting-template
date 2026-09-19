# net.minecraftforge.fml.util

- [CertificateHelper](#certificatehelper)
- [EnhancedRuntimeException](#enhancedruntimeexception)
- [EnhancedRuntimeException.WrappedPrintStream](#enhancedruntimeexception.wrappedprintstream)
- [LoaderException](#loaderexception)
- [LoaderExceptionModCrash](#loaderexceptionmodcrash)
- [ObfuscationReflectionHelper](#obfuscationreflectionhelper)
- [ObfuscationReflectionHelper.UnableToAccessFieldException](#obfuscationreflectionhelper.unabletoaccessfieldexception)
- [ObfuscationReflectionHelper.UnableToFindFieldException](#obfuscationreflectionhelper.unabletofindfieldexception)
- [ObfuscationReflectionHelper.UnableToFindMethodException](#obfuscationreflectionhelper.unabletofindmethodexception)
- [ObfuscationReflectionHelper.UnknownConstructorException](#obfuscationreflectionhelper.unknownconstructorexception)
## CertificateHelper

*class* `net.minecraftforge.fml.util.CertificateHelper`

### Fields
- `private static final String HEXES` (= "0123456789abcdef")

### Methods
- `public static com.google.common.collect.ImmutableList<String> getFingerprints(Certificate[] certificates)`
- `public static String getFingerprint(Certificate certificate)`
- `public static String getFingerprint(ByteBuffer buffer)`
- `private static String hexify(byte[] chksum)`

## EnhancedRuntimeException

*class* `net.minecraftforge.fml.util.EnhancedRuntimeException`

RuntimeException that gives subclasses the simple opportunity to write extra data when printing the stack trace.
 Mainly a helper class as printsStackTrace has multiple signatures.

### Fields
- `private static final long serialVersionUID` (= 1L)

### Methods
- `public String getMessage()`
- `public void printStackTrace(PrintWriter s)`
- `public void printStackTrace(PrintStream s)`
- `protected abstract void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## EnhancedRuntimeException.WrappedPrintStream

*class* `net.minecraftforge.fml.util.EnhancedRuntimeException.WrappedPrintStream`

Enclosing class: EnhancedRuntimeException

### Methods
- `public abstract void println(String line)`

## LoaderException

*class* `net.minecraftforge.fml.util.LoaderException`

### Fields
- `private static final long serialVersionUID` (= -5675297950958861378L)

### Methods
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`

### Inherited methods
- from `net.minecraftforge.fml.util.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## LoaderExceptionModCrash

*class* `net.minecraftforge.fml.util.LoaderExceptionModCrash`

Prevent LoaderException from adding its own stack trace to the wrapped throwable's stack trace.

### Fields
- `private static final long serialVersionUID` (= 1L)

### Methods
- `public Throwable fillInStackTrace()`

### Inherited methods
- from `net.minecraftforge.fml.util.LoaderException`: `printStackTrace`
- from `net.minecraftforge.fml.util.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## ObfuscationReflectionHelper

*class* `net.minecraftforge.fml.util.ObfuscationReflectionHelper`

Some reflection helper code.
 This may not work properly in Java 9 with its new, more restrictive, reflection management.
 As such, if issues are encountered, please report them and we can see what we can do to expand
 the compatibility.

 In other cases, AccessTransformers may be used.

 All field and method names should be passed in as SRG names, and this will automatically resolve if MCP mappings are detected.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker REFLECTION`

### Methods
- `@NotNull public static @NotNull String remapName(cpw.mods.modlauncher.api.INameMappingService.Domain domain,  String name)`
  Remaps a name using the SRG naming function
  - param: domain - The INameMappingService.Domain to use to remap the name.
  - param: name - The name to try and remap.
  - returns: The remapped name, or the original name if it couldn't be remapped.
- `@Nullable public static <T, E> T getPrivateValue(Class<? super E> classToAccess,  E instance,  String fieldName)`
  Gets the value a field with the specified name in the given class.
   Note: For performance, use findField(Class, String) if you are getting the value more than once.
  
   Throws an exception if the field is not found or the value of the field cannot be gotten.
  - param: classToAccess - The class to find the field on.
  - param: instance - The instance of the classToAccess.
  - param: fieldName - The SRG (unmapped) name of the field to find (e.g. "f_46443_").
  - returns: The value of the field with the specified name in the classToAccess.
  - throws: ObfuscationReflectionHelper.UnableToAccessFieldException - If there was a problem getting the field.
  - throws: ObfuscationReflectionHelper.UnableToAccessFieldException - If there was a problem getting the value.
- `public static <T, E> void setPrivateValue(@NotNull  @NotNull Class<? super T> classToAccess,  @NotNull  T instance,  @Nullable  E value,  @NotNull  @NotNull String fieldName)`
  Sets the value a field with the specified name in the given class.
   Note: For performance, use findField(Class, String) if you are setting the value more than once.
  
   Throws an exception if the field is not found or the value of the field cannot be set.
  - param: classToAccess - The class to find the field on.
  - param: instance - The instance of the classToAccess.
  - param: value - The new value for the field
  - param: fieldName - The name of the field in the classToAccess.
  - throws: ObfuscationReflectionHelper.UnableToFindFieldException - If there was a problem getting the field.
  - throws: ObfuscationReflectionHelper.UnableToAccessFieldException - If there was a problem setting the value of the field.
- `@NotNull public static @NotNull Method findMethod(@NotNull  @NotNull Class<?> clazz,  @NotNull  @NotNull String methodName,  @NotNull  @NotNull Class<?>... parameterTypes)`
  Finds a method with the specified name and parameters in the given class and makes it accessible.
   Note: For performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the method is not found.
  - param: clazz - The class to find the method on.
  - param: methodName - The SRG (unmapped) name of the method to find (e.g. "m_5776_").
  - param: parameterTypes - The parameter types of the method to find.
  - returns: The method with the specified name and parameters in the given class.
  - throws: NullPointerException - If clazz is null.
  - throws: NullPointerException - If methodName is null.
  - throws: IllegalArgumentException - If methodName is empty.
  - throws: NullPointerException - If parameterTypes is null.
  - throws: ObfuscationReflectionHelper.UnableToFindMethodException - If the method could not be found.
- `@NotNull public static <T> @NotNull Constructor<T> findConstructor(@NotNull  @NotNull Class<T> clazz,  @NotNull  @NotNull Class<?>... parameterTypes)`
  Finds a constructor with the specified parameter types in the given class and makes it accessible.
   Note: For performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the constructor is not found.
  - param: clazz - The class to find the constructor in.
  - param: parameterTypes - The parameter types of the constructor.
  - returns: The constructor with the specified parameters in the given class.
  - throws: NullPointerException - If clazz is null.
  - throws: NullPointerException - If parameterTypes is null.
  - throws: ObfuscationReflectionHelper.UnknownConstructorException - If the constructor could not be found.
- `@NotNull public static <T> @NotNull Field findField(@NotNull  @NotNull Class<? super T> clazz,  @NotNull  @NotNull String fieldName)`
  Finds a field with the specified name in the given class and makes it accessible.
   Note: For performance, store the returned value and avoid calling this repeatedly.
  
   Throws an exception if the field is not found.
  - param: clazz - The class to find the field on.
  - param: fieldName - The SRG (unmapped) name of the field to find (e.g. "f_46443_").
  - returns: The constructor with the specified parameters in the given class.
  - throws: NullPointerException - If clazz is null.
  - throws: NullPointerException - If fieldName is null.
  - throws: IllegalArgumentException - If fieldName is empty.
  - throws: ObfuscationReflectionHelper.UnableToFindFieldException - If the field could not be found.

## ObfuscationReflectionHelper.UnableToAccessFieldException

*class* `net.minecraftforge.fml.util.ObfuscationReflectionHelper.UnableToAccessFieldException`

Enclosing class: ObfuscationReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ObfuscationReflectionHelper.UnableToFindFieldException

*class* `net.minecraftforge.fml.util.ObfuscationReflectionHelper.UnableToFindFieldException`

Enclosing class: ObfuscationReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ObfuscationReflectionHelper.UnableToFindMethodException

*class* `net.minecraftforge.fml.util.ObfuscationReflectionHelper.UnableToFindMethodException`

Enclosing class: ObfuscationReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ObfuscationReflectionHelper.UnknownConstructorException

*class* `net.minecraftforge.fml.util.ObfuscationReflectionHelper.UnknownConstructorException`

Enclosing class: ObfuscationReflectionHelper

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
