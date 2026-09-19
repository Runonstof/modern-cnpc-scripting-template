# ibxm

- [Channel](#channel)
- [Envelope](#envelope)
- [FastTracker2](#fasttracker2)
- [IBXM](#ibxm)
- [Instrument](#instrument)
- [LogTable](#logtable)
- [Module](#module)
- [Pattern](#pattern)
- [Player](#player)
- [ProTracker](#protracker)
- [Sample](#sample)
- [ScreamTracker3](#screamtracker3)
## Channel

*class* `ibxm.Channel`

### Fields
- `public int pattern_loop_row`

### Methods
- `public void reset()`
- `public void resample(int[] mixing_buffer,  int frame_offset,  int frames,  int quality)`
- `public void update_sample_idx(int samples)`
- `public void set_volume(int vol)`
- `public void set_panning(int pan)`
- `public void row(int key,  int inst_idx,  int volume_column,  int effect,  int effect_param)`
- `public void tick()`

## Envelope

*class* `ibxm.Envelope`

### Fields
- `public boolean sustain`
- `public boolean looped`

### Methods
- `public void set_num_points(int num_points)`
- `public void set_point(int point,  int tick,  int ampl,  boolean delta)`
- `public void set_sustain_point(int point)`
- `public void set_loop_points(int start,  int end)`
- `public int next_tick(int tick,  boolean key_on)`
- `public int calculate_ampl(int tick)`
- `public void dump()`

## FastTracker2

*class* `ibxm.FastTracker2`

### Methods
- `public static boolean is_xm(byte[] header_60_bytes)`
- `public static Module load_xm(byte[] header_60_bytes,  java.io.DataInput data_input)  throws java.io.IOException`
  - throws: java.io.IOException

## IBXM

*class* `ibxm.IBXM`

### Fields
- `public static final java.lang.String VERSION` (= "ibxm alpha 51 (c)2008 mumart@gmail.com")
- `public static final int FP_SHIFT` (= 15)
- `public static final int FP_ONE` (= 32768)
- `public static final int FP_MASK` (= 32767)

### Methods
- `public void set_module(Module m)`
- `public void set_resampling_quality(int quality)`
- `public int calculate_song_duration()`
- `public void set_sequence_index(int sequence_index,  int row)`
- `public void seek(int sample_position)`
- `public void get_audio(byte[] output_buffer,  int frames)`

## Instrument

*class* `ibxm.Instrument`

### Fields
- `public java.lang.String name`
- `public int vibrato_type`
- `public int vibrato_sweep`
- `public int vibrato_depth`
- `public int vibrato_rate`
- `public boolean volume_envelope_active`
- `public boolean panning_envelope_active`
- `public int volume_fade_out`

### Methods
- `public Envelope get_volume_envelope()`
- `public void set_volume_envelope(Envelope envelope)`
- `public Envelope get_panning_envelope()`
- `public void set_panning_envelope(Envelope envelope)`
- `public Sample get_sample_from_key(int key)`
- `public void set_key_to_sample(int key,  int sample)`
- `public int get_num_samples()`
- `public void set_num_samples(int num_samples)`
- `public Sample get_sample(int sample_index)`
- `public void set_sample(int sample_index,  Sample sample)`

## LogTable

*class* `ibxm.LogTable`

### Methods
- `public static int log_2(int x)`
- `public static int raise_2(int x)`

## Module

*class* `ibxm.Module`

### Fields
- `public java.lang.String song_title`
- `public boolean linear_periods`
- `public boolean fast_volume_slides`
- `public boolean pal`
- `public int global_volume`
- `public int channel_gain`
- `public int default_speed`
- `public int default_tempo`
- `public int restart_sequence_index`

### Methods
- `public int get_num_channels()`
- `public void set_num_channels(int num_channels)`
- `public int get_initial_panning(int channel)`
- `public void set_initial_panning(int channel,  int panning)`
- `public int get_sequence_length()`
- `public void set_sequence_length(int sequence_length)`
- `public void set_sequence(int sequence_index,  int pattern_index)`
- `public int get_num_patterns()`
- `public void set_num_patterns(int num_patterns)`
- `public Pattern get_pattern_from_sequence(int sequence_index)`
- `public Pattern get_pattern(int pattern_index)`
- `public void set_pattern(int pattern_index,  Pattern pattern)`
- `public int get_num_instruments()`
- `public void set_num_instruments(int num_instruments)`
- `public Instrument get_instrument(int instrument_index)`
- `public void set_instrument(int instrument_index,  Instrument instrument)`

## Pattern

*class* `ibxm.Pattern`

### Fields
- `public int num_rows`

### Methods
- `public void set_pattern_data(byte[] data)`
- `public void get_note(int[] note,  int index)`
- `public int next_note(int data_offset,  int[] note)`

## Player

*class* `ibxm.Player`

### Methods
- `public static void main(java.lang.String[] args)  throws java.lang.Exception`
  Simple command-line test player.
  - throws: java.lang.Exception
- `public static Module load_module(java.io.InputStream input)  throws java.lang.IllegalArgumentException,  java.io.IOException`
  Decode the data in the specified InputStream into a Module instance.
  - param: input - an InputStream containing the module file to be decoded.
  - throws: java.lang.IllegalArgumentException - if the data is not recognised as a module file.
  - throws: java.io.IOException
- `public void set_module(Module m)`
  Set the Module instance to be played.
- `public void set_loop(boolean loop)`
  If loop is true, playback will continue indefinitely,
   otherwise the module will play through once and stop.
- `public void play()`
  Open the audio device and begin playback.
   If a module is already playing it will be restarted.
- `public void stop()`
  Stop playback and close the audio device.

## ProTracker

*class* `ibxm.ProTracker`

### Methods
- `public static boolean is_mod(byte[] header_1084_bytes)`
- `public static Module load_mod(byte[] header_1084_bytes,  java.io.DataInput data_input)  throws java.io.IOException`
  - throws: java.io.IOException

## Sample

*class* `ibxm.Sample`

### Fields
- `public java.lang.String name`
- `public boolean set_panning`
- `public int volume`
- `public int panning`
- `public int transpose`

### Methods
- `public void set_sample_data(short[] data,  int loop_start,  int loop_length,  boolean ping_pong)`
- `public void resample_nearest(int sample_idx,  int sample_frac,  int step,  int left_gain,  int right_gain,  int[] mix_buffer,  int frame_offset,  int frames)`
- `public void resample_linear(int sample_idx,  int sample_frac,  int step,  int left_gain,  int right_gain,  int[] mix_buffer,  int frame_offset,  int frames)`
- `public void resample_sinc(int sample_idx,  int sample_frac,  int step,  int left_gain,  int right_gain,  int[] mix_buffer,  int frame_offset,  int frames)`
- `public boolean has_finished(int sample_idx)`

## ScreamTracker3

*class* `ibxm.ScreamTracker3`

### Methods
- `public static boolean is_s3m(byte[] header_96_bytes)`
- `public static Module load_s3m(byte[] header_96_bytes,  java.io.DataInput data_input)  throws java.io.IOException`
  - throws: java.io.IOException
