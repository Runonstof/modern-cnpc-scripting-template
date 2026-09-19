# net.minecraftforge.fml.repackage.com.nothome.delta

- [ByteBufferSeekableSource](#bytebufferseekablesource)
- [Checksum](#checksum)
- [DebugDiffWriter](#debugdiffwriter)
- [Delta](#delta)
- [DiffWriter](#diffwriter)
- [GDiffPatcher](#gdiffpatcher)
- [GDiffWriter](#gdiffwriter)
- [PatchException](#patchexception)
- [RandomAccessFileSeekableSource](#randomaccessfileseekablesource)
- [SeekableSource](#seekablesource)
## ByteBufferSeekableSource

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.ByteBufferSeekableSource`

Wraps a byte buffer as a source

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, SeekableSource

### Methods
- `public void seek(long pos)  throws java.io.IOException`
  Description copied from interface: SeekableSource
  Sets the position for the next SeekableSource.read(ByteBuffer).
  - throws: java.io.IOException
- `public int read(java.nio.ByteBuffer dest)  throws java.io.IOException`
  Description copied from interface: SeekableSource
  Reads up to Buffer.remaining() bytes from the source,
   returning the number of bytes read, or -1 if no bytes were read
   and EOF was reached.
  - throws: java.io.IOException
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String toString()`
  Returns a debug String.

## Checksum

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.Checksum`

Checksum computation class.

### Methods
- `public static long queryChecksum(java.nio.ByteBuffer bb,  int len)`
  Finds the checksum computed from the buffer.
   Marks, gets, then resets the buffer.
- `public static long incrementChecksum(long checksum,  byte out,  byte in,  int chunkSize)`
  Increments a checksum.
  - param: checksum - initial checksum
  - param: out - byte leaving view
  - param: in - byte entering view
  - param: chunkSize - size of chunks
  - returns: new checksum
- `public static char[] getSingleHash()`
  256 random hash values.
- `public int findChecksumIndex(long hashf)`
  Finds the index of a checksum.
- `public java.lang.String toString()`
  Returns a debug String.

## DebugDiffWriter

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.DebugDiffWriter`

For debugging patch generation.

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, DiffWriter

### Methods
- `public void addCopy(long offset,  int length)  throws java.io.IOException`
  Description copied from interface: DiffWriter
  Add a GDIFF copy instruction.
  - throws: java.io.IOException
- `public void addData(byte b)  throws java.io.IOException`
  Description copied from interface: DiffWriter
  Add a GDIFF data instruction.
   Implementors should buffer the data.
  - throws: java.io.IOException
- `public void flush()  throws java.io.IOException`
  Description copied from interface: DiffWriter
  Flushes to output, e.g. any data added.
  - throws: java.io.IOException
- `public void close()  throws java.io.IOException`
  Description copied from interface: DiffWriter
  Closes this stream.
   Note that DiffWriter will invoke this method at the end.
  - throws: java.io.IOException

## Delta

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.Delta`

Class for computing deltas against a source.
 The source file is read by blocks and a hash is computed per block.
 Then the target is scanned for matching blocks.

 This class is not thread safe. Use one instance per thread.

 This class should support files over 4GB in length, although you must
 use a larger checksum size, such as 1K, as all checksums use "int" indexing.
 Newer versions may eventually support paging in/out of checksums.

### Fields
- `public static final int DEFAULT_CHUNK_SIZE` (= 16)
  Default size of 16.
   For "Lorem ipsum" text files (see the tests) the ideal size is about 14.
   Any smaller and the patch size becomes actually be larger.
  
   Use a size like 64 or 128 for large files.

### Methods
- `public void setChunkSize(int size)`
  Sets the chunk size used.
   Larger chunks are faster and use less memory, but create larger patches
   as well.
  - param: size -
- `public void compute(byte[] source,  byte[] target,  java.io.OutputStream output)  throws java.io.IOException`
  Compares the source bytes with target bytes, writing to output.
  - throws: java.io.IOException
- `public byte[] compute(byte[] source,  byte[] target)  throws java.io.IOException`
  Compares the source bytes with target bytes, returning output.
  - throws: java.io.IOException
- `public void compute(byte[] sourceBytes,  java.io.InputStream inputStream,  DiffWriter diffWriter)  throws java.io.IOException`
  Compares the source bytes with target input, writing to output.
  - throws: java.io.IOException
- `public void compute(java.io.File sourceFile,  java.io.File targetFile,  DiffWriter output)  throws java.io.IOException`
  Compares the source file with a target file, writing to output.
  - param: output - will be closed
  - throws: java.io.IOException
- `public void compute(SeekableSource seekSource,  java.io.InputStream targetIS,  DiffWriter output)  throws java.io.IOException`
  Compares the source with a target, writing to output.
  - param: output - will be closed
  - throws: java.io.IOException
- `public static void main(java.lang.String[] argv)  throws java.lang.Exception`
  Creates a patch using file names.
  - throws: java.lang.Exception

## DiffWriter

*interface* `net.minecraftforge.fml.repackage.com.nothome.delta.DiffWriter`

Interface for DIFF writers.

All Superinterfaces: java.lang.AutoCloseable, java.io.Closeable

### Methods
- `void addCopy(long offset,  int length)  throws java.io.IOException`
  Add a GDIFF copy instruction.
  - throws: java.io.IOException
- `void addData(byte b)  throws java.io.IOException`
  Add a GDIFF data instruction.
   Implementors should buffer the data.
  - throws: java.io.IOException
- `void flush()  throws java.io.IOException`
  Flushes to output, e.g. any data added.
  - throws: java.io.IOException
- `void close()  throws java.io.IOException`
  Closes this stream.
   Note that DiffWriter will invoke this method at the end.
  - throws: java.io.IOException

## GDiffPatcher

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.GDiffPatcher`

This class patches an input file with a GDIFF patch file.

 The patch file follows the GDIFF file specification available at

 http://www.w3.org/TR/NOTE-gdiff-19970901.html.

### Methods
- `public void patch(java.io.File sourceFile,  java.io.File patchFile,  java.io.File outputFile)  throws java.io.IOException`
  Patches to an output file.
  - throws: java.io.IOException
- `public void patch(byte[] source,  java.io.InputStream patch,  java.io.OutputStream output)  throws java.io.IOException`
  Patches to an output stream.
  - throws: java.io.IOException
- `public byte[] patch(byte[] source,  byte[] patch)  throws java.io.IOException`
  Patches in memory, returning the patch result.
  - throws: java.io.IOException
- `public void patch(SeekableSource source,  java.io.InputStream patch,  java.io.OutputStream out)  throws java.io.IOException`
  Patches to an output stream.
  - throws: java.io.IOException
- `public static void main(java.lang.String[] argv)`
  Simple command line tool to patch a file.

## GDiffWriter

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.GDiffWriter`

Outputs a diff following the GDIFF file specification available at
 http://www.w3.org/TR/NOTE-gdiff-19970901.html.

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, DiffWriter

### Fields
- `public static final int CHUNK_SIZE` (= 32767)
  Max length of a chunk.
- `public static final byte EOF` (= 0)
- `public static final int DATA_MAX` (= 246)
  Max length for single length data encode.
- `public static final int DATA_USHORT` (= 247)
- `public static final int DATA_INT` (= 248)
- `public static final int COPY_USHORT_UBYTE` (= 249)
- `public static final int COPY_USHORT_USHORT` (= 250)
- `public static final int COPY_USHORT_INT` (= 251)
- `public static final int COPY_INT_UBYTE` (= 252)
- `public static final int COPY_INT_USHORT` (= 253)
- `public static final int COPY_INT_INT` (= 254)
- `public static final int COPY_LONG_INT` (= 255)

### Methods
- `public void addCopy(long offset,  int length)  throws java.io.IOException`
  Description copied from interface: DiffWriter
  Add a GDIFF copy instruction.
  - throws: java.io.IOException
- `public void addData(byte b)  throws java.io.IOException`
  Adds a data byte.
  - throws: java.io.IOException
- `public void flush()  throws java.io.IOException`
  Flushes accumulated data bytes, if any.
  - throws: java.io.IOException
- `public void close()  throws java.io.IOException`
  Writes the final EOF byte, closes the underlying stream.
  - throws: java.io.IOException

## PatchException

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.PatchException`

Thrown when a patch is invalid.

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## RandomAccessFileSeekableSource

*class* `net.minecraftforge.fml.repackage.com.nothome.delta.RandomAccessFileSeekableSource`

Wraps a random access file.

All Implemented Interfaces: java.io.Closeable, java.lang.AutoCloseable, SeekableSource

### Methods
- `public void seek(long pos)  throws java.io.IOException`
  Description copied from interface: SeekableSource
  Sets the position for the next SeekableSource.read(ByteBuffer).
  - throws: java.io.IOException
- `public int read(byte[] b,  int off,  int len)  throws java.io.IOException`
  - throws: java.io.IOException
- `public long length()  throws java.io.IOException`
  - throws: java.io.IOException
- `public void close()  throws java.io.IOException`
  - throws: java.io.IOException
- `public int read(java.nio.ByteBuffer bb)  throws java.io.IOException`
  Description copied from interface: SeekableSource
  Reads up to Buffer.remaining() bytes from the source,
   returning the number of bytes read, or -1 if no bytes were read
   and EOF was reached.
  - throws: java.io.IOException

## SeekableSource

*interface* `net.minecraftforge.fml.repackage.com.nothome.delta.SeekableSource`

For sources of random-access data, such as RandomAccessFile.

All Superinterfaces: java.lang.AutoCloseable, java.io.Closeable

### Methods
- `void seek(long pos)  throws java.io.IOException`
  Sets the position for the next read(ByteBuffer).
  - throws: java.io.IOException
- `int read(java.nio.ByteBuffer bb)  throws java.io.IOException`
  Reads up to Buffer.remaining() bytes from the source,
   returning the number of bytes read, or -1 if no bytes were read
   and EOF was reached.
  - throws: java.io.IOException

### Inherited methods
- from `java.io.Closeable`: `close`
