# paulscode.sound.codecs

- [CodecIBXM](#codecibxm)
## CodecIBXM

*class* `paulscode.sound.codecs.CodecIBXM`

The CodecIBXM class provides an ICodec interface for reading from MOD/S3M/XM
 files via the IBXM library.
 SoundSystem CodecIBXM Class License:

 You are free to use this class for any purpose, commercial or otherwise.
 You may modify this class or source code, and distribute it any way you
 like, provided the following conditions are met:

 1) You may not falsely claim to be the author of this class or any
 unmodified portion of it.

 2) You may not copyright this class or a modified version of it and then
 sue me for copyright infringement.

 3) If you modify the source code, you must clearly document the changes
 made before redistributing the modified source code, so other users know
 it is not the original code.

 4) You are not required to give me credit for this class in any derived
 work, but if you do, you must also mention my website:
 http://www.paulscode.com

 5) I the author will not be responsible for any damages (physical,
 financial, or otherwise) caused by the use if this class or any portion
 of it.

 6) I the author do not guarantee, warrant, or make any representations,
 either expressed or implied, regarding the use of this class or any
 portion of it.

 Author: Paul Lamb

 http://www.paulscode.com

 This software is based on or using the IBXM library available from
 http://www.geocities.com/sunet2000/

 IBXM is copyright (c) 2007, Martin Cameron, and is licensed under the BSD
 License.

 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer. Redistributions in binary
 form must reproduce the above copyright notice, this list of conditions and
 the following disclaimer in the documentation and/or other materials
 provided with the distribution. Neither the name of mumart nor the names of
 its contributors may be used to endorse or promote products derived from
 this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.

### Methods
- `public void reverseByteOrder(boolean b)`
  Tells this codec when it will need to reverse the byte order of
   the data before returning it in the read() and readAll() methods. The
   IBXM library produces audio data in a format that some external audio
   libraries require to be reversed. Derivatives of the Library and Source
   classes for audio libraries which require this type of data to be reversed
   will call the reverseByteOrder() method.
  - param: b - True if the calling audio library requires byte-reversal.
- `public boolean initialize(java.net.URL url)`
  Prepares an audio stream to read from. If another stream is already opened,
   it will be closed and a new audio stream opened in its place.
  - param: url - URL to an audio file to stream from.
  - returns: False if an error occurred or if end of stream was reached.
- `public boolean initialized()`
  Returns false if the stream is busy initializing.
  - returns: True if steam is initialized.
- `public SoundBuffer read()`
  Reads in one stream buffer worth of audio data. See
   SoundSystemConfig for more
   information about accessing and changing default settings.
  - returns: The audio data wrapped into a SoundBuffer context.
- `public SoundBuffer readAll()`
  Reads in all the audio data from the stream (up to the default
   "maximum file size". See
   SoundSystemConfig for more
   information about accessing and changing default settings.
  - returns: the audio data wrapped into a SoundBuffer context.
- `public boolean endOfStream()`
  Returns false if there is still more data available to be read in.
  - returns: True if end of stream was reached.
- `public void cleanup()`
  Closes the audio stream and remove references to all instantiated objects.
- `public javax.sound.sampled.AudioFormat getAudioFormat()`
  Returns the audio format of the data being returned by the read() and
   readAll() methods.
  - returns: Information wrapped into an AudioFormat context.
- `public static void reverseBytes(byte[] buffer)`
  Reverse-orders all bytes contained in the specified array.
  - param: buffer - Array containing audio data.
- `public static void reverseBytes(byte[] buffer,  int offset,  int size)`
  Reverse-orders the specified range of bytes contained in the specified array.
  - param: buffer - Array containing audio data.
  - param: offset - Array index to begin.
  - param: size - number of bytes to reverse-order.
