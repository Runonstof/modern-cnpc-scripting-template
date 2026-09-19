# com.mojang.realmsclient.exception

- [RealmsDefaultUncaughtExceptionHandler](#realmsdefaultuncaughtexceptionhandler)
- [RealmsHttpException](#realmshttpexception)
- [RealmsServiceException](#realmsserviceexception)
- [RetryCallException](#retrycallexception)
## RealmsDefaultUncaughtExceptionHandler

*class* `com.mojang.realmsclient.exception.RealmsDefaultUncaughtExceptionHandler`

### Fields
- `private final org.slf4j.Logger logger`

### Methods
- `public void uncaughtException(Thread p_87768_,  Throwable p_87769_)`

## RealmsHttpException

*class* `com.mojang.realmsclient.exception.RealmsHttpException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## RealmsServiceException

*class* `com.mojang.realmsclient.exception.RealmsServiceException`

### Fields
- `public final RealmsError realmsError`

### Methods
- `public String getMessage()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## RetryCallException

*class* `com.mojang.realmsclient.exception.RetryCallException`

### Fields
- `public static final int DEFAULT_DELAY` (= 5)
- `public final int delaySeconds`

### Inherited fields
- from `com.mojang.realmsclient.exception.RealmsServiceException`: `realmsError`

### Inherited methods
- from `com.mojang.realmsclient.exception.RealmsServiceException`: `getMessage`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
