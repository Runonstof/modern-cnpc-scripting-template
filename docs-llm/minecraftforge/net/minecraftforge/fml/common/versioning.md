# net.minecraftforge.fml.common.versioning

- [ArtifactVersion](#artifactversion)
- [ComparableVersion](#comparableversion)
- [DefaultArtifactVersion](#defaultartifactversion)
- [DependencyParser](#dependencyparser)
- [DependencyParser.DependencyInfo](#dependencyparser.dependencyinfo)
- [InvalidVersionSpecificationException](#invalidversionspecificationexception)
- [Restriction](#restriction)
- [VersionParser](#versionparser)
- [VersionRange](#versionrange)
## ArtifactVersion

*interface* `net.minecraftforge.fml.common.versioning.ArtifactVersion`

All Superinterfaces: java.lang.Comparable<ArtifactVersion>

### Methods
- `java.lang.String getLabel()`
- `java.lang.String getVersionString()`
- `boolean containsVersion(ArtifactVersion source)`
- `java.lang.String getRangeString()`

### Inherited methods
- from `java.lang.Comparable`: `compareTo`

## ComparableVersion

*class* `net.minecraftforge.fml.common.versioning.ComparableVersion`

Generic implementation of version comparison.

 Features:

 mixing of '-' (dash) and '.' (dot) separators,
 transition between characters and digits also constitutes a separator:
 1.0alpha1 => [1, 0, alpha, 1]
 unlimited number of version components,
 version components in the text can be digits or strings,
 strings are checked for well-known qualifiers and the qualifier ordering is used for version ordering.
 Well-known qualifiers (case insensitive) are:
 snapshot
 alpha or a
 beta or b
 milestone or m
 rc or cr
 (the empty string) or ga or final
 sp

 Unknown qualifiers are considered after known qualifiers, with lexical order (always case insensitive),

 a dash usually precedes a qualifier, and is always less important than something preceded with a dot.

All Implemented Interfaces: java.lang.Comparable<ComparableVersion>

### Methods
- `public final void parseVersion(java.lang.String version)`
- `public int compareTo(ComparableVersion o)`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object o)`
- `public int hashCode()`

## DefaultArtifactVersion

*class* `net.minecraftforge.fml.common.versioning.DefaultArtifactVersion`

All Implemented Interfaces: java.lang.Comparable<ArtifactVersion>, ArtifactVersion

### Methods
- `public boolean equals(java.lang.Object obj)`
- `public int compareTo(ArtifactVersion o)`
- `public java.lang.String getLabel()`
- `public boolean containsVersion(ArtifactVersion source)`
- `public java.lang.String getVersionString()`
- `public java.lang.String getRangeString()`
- `public java.lang.String toString()`
- `public VersionRange getRange()`

## DependencyParser

*class* `net.minecraftforge.fml.common.versioning.DependencyParser`

### Methods
- `public DependencyParser.DependencyInfo parseDependencies(java.lang.String dependencyString)`

## DependencyParser.DependencyInfo

*class* `net.minecraftforge.fml.common.versioning.DependencyParser.DependencyInfo`

Enclosing class: DependencyParser

### Fields
- `public final java.util.Set<ArtifactVersion> requirements`
- `public final java.util.List<ArtifactVersion> dependencies`
- `public final java.util.List<ArtifactVersion> dependants`

## InvalidVersionSpecificationException

*class* `net.minecraftforge.fml.common.versioning.InvalidVersionSpecificationException`

Occurs when a version is invalid.

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## Restriction

*class* `net.minecraftforge.fml.common.versioning.Restriction`

Describes a restriction in versioning.

### Fields
- `public static final Restriction EVERYTHING`

### Methods
- `public ArtifactVersion getLowerBound()`
- `public boolean isLowerBoundInclusive()`
- `public ArtifactVersion getUpperBound()`
- `public boolean isUpperBoundInclusive()`
- `public boolean containsVersion(ArtifactVersion version)`
- `public int hashCode()`
- `public boolean equals(java.lang.Object other)`
- `public java.lang.String toString()`
- `public java.lang.String toStringFriendly()`

## VersionParser

*class* `net.minecraftforge.fml.common.versioning.VersionParser`

Parses version strings according to the specification here:
 http://docs.codehaus.org/display/MAVEN/Versioning
 and allows for comparison of versions based on that document.
 Bounded version specifications are defined as
 https://maven.apache.org/enforcer/enforcer-rules/versionRanges.html

 Borrows heavily from maven version range management code

### Methods
- `public static ArtifactVersion parseVersionReference(java.lang.String labelledRef)`
- `public static boolean satisfies(ArtifactVersion target,  ArtifactVersion source)`
- `public static VersionRange parseRange(java.lang.String range)`

## VersionRange

*class* `net.minecraftforge.fml.common.versioning.VersionRange`

Construct a version range from a specification.

### Methods
- `public ArtifactVersion getRecommendedVersion()`
- `public java.util.List<Restriction> getRestrictions()`
- `public VersionRange cloneOf()`
- `public static VersionRange newRange(ArtifactVersion version,  java.util.List<Restriction> restrictions)`
  Factory method, for custom versioning schemes
  - param: version - version
  - param: restrictions - restriction list
  - returns: a new version range
- `public static VersionRange createFromVersionSpec(java.lang.String spec)  throws InvalidVersionSpecificationException`
  Create a version range from a string representation
  
   Some spec examples are
  
   1.0 Version 1.0
   [1.0,2.0) Versions 1.0 (included) to 2.0 (not included)
   [1.0,2.0] Versions 1.0 to 2.0 (both included)
   [1.5,) Versions 1.5 and higher
   (,1.0],[1.2,) Versions up to 1.0 (included) and 1.2 or higher
  - param: spec - string representation of a version or version range
  - returns: a new VersionRange object that represents the spec
  - throws: InvalidVersionSpecificationException
- `public static VersionRange createFromVersion(java.lang.String version,  ArtifactVersion existing)`
- `public VersionRange restrict(VersionRange restriction)`
  Creates and returns a new VersionRange that is a restriction of this
   version range and the specified version range.
  
   Note: Precedence is given to the recommended version from this version range over the
   recommended version from the specified version range.
  - param: restriction - the VersionRange that will be used to restrict this version
 range.
  - returns: the VersionRange that is a restriction of this version range and the
 specified version range.

 The restrictions of the returned version range will be an intersection of the restrictions
 of this version range and the specified version range if both version ranges have
 restrictions. Otherwise, the restrictions on the returned range will be empty.

 The recommended version of the returned version range will be the recommended version of
 this version range, provided that ranges falls within the intersected restrictions. If
 the restrictions are empty, this version range's recommended version is used if it is not
 null. If it is null, the specified version range's recommended
 version is used (provided it is non-null). If no recommended version can be
 obtained, the returned version range's recommended version is set to null.
  - throws: java.lang.NullPointerException - if the specified VersionRange is
 null.
- `public java.lang.String toString()`
- `public java.lang.String toStringFriendly()`
- `public ArtifactVersion matchVersion(java.util.List<ArtifactVersion> versions)`
- `public boolean containsVersion(ArtifactVersion version)`
- `public boolean hasRestrictions()`
- `public boolean equals(java.lang.Object obj)`
- `public int hashCode()`
- `public boolean isUnboundedAbove()`
- `public java.lang.String getLowerBoundString()`
