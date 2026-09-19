# net.minecraftforge.server.terminalconsole

- [HighlightErrorConverter](#highlighterrorconverter)
- [MinecraftFormattingConverter](#minecraftformattingconverter)
- [TerminalConsoleAppender](#terminalconsoleappender)
## HighlightErrorConverter

*class* `net.minecraftforge.server.terminalconsole.HighlightErrorConverter`

A simplified version of HighlightConverter that uses
 TerminalConsoleAppender to detect if Ansi escape codes can be used
 to highlight errors and warnings in the console.

 If configured, it will mark all logged errors with a red color and all
 warnings with a yellow color. It can be only used together with
 TerminalConsoleAppender.

 TerminalConsoleAppender.ANSI_OVERRIDE_PROPERTY may be used
 to force the use of ANSI colors even in unsupported environments.

 Example usage: %highlightError{%level: %message}

### Methods
- `public void format(LogEvent event,  java.lang.StringBuilder toAppendTo)`
- `public boolean handlesThrowable()`
- `public static HighlightErrorConverter newInstance(Configuration config,  java.lang.String[] options)`
  Gets a new instance of the HighlightErrorConverter with the
   specified options.
  - param: config - The current configuration
  - param: options - The pattern options
  - returns: The new instance

## MinecraftFormattingConverter

*class* `net.minecraftforge.server.terminalconsole.MinecraftFormattingConverter`

Replaces Minecraft formatting codes in the result of a pattern with
 appropriate ANSI escape codes. The implementation will only replace valid
 color codes using the section sign (§).

 The MinecraftFormattingConverter can be only used together with
 TerminalConsoleAppender to detect if the current console supports
 color output. When running in an unsupported environment, it will
 automatically strip all formatting codes instead.

 TerminalConsoleAppender.ANSI_OVERRIDE_PROPERTY may be used
 to force the use of ANSI colors even in unsupported environments. As an
 alternative, KEEP_FORMATTING_PROPERTY may be used to keep the
 raw Minecraft formatting codes.

 Example usage: %minecraftFormatting{%message}

 It can be configured to always strip formatting codes from the message:
 %minecraftFormatting{%message}{strip}

### Fields
- `public static final java.lang.String KEEP_FORMATTING_PROPERTY` (= "terminal.keepMinecraftFormatting")
  System property that allows disabling the replacement of Minecraft
   formatting codes entirely, keeping them in the console output. For
   some applications they might be easier and more accurate for parsing
   in applications like certain control panels.
  
   If this system property is not set, or set to any value except
   true, all Minecraft formatting codes will be replaced
   or stripped from the console output.

### Methods
- `public void format(LogEvent event,  java.lang.StringBuilder toAppendTo)`
- `public static MinecraftFormattingConverter newInstance(Configuration config,  java.lang.String[] options)`
  Gets a new instance of the MinecraftFormattingConverter with the
   specified options.
  - param: config - The current configuration
  - param: options - The pattern options
  - returns: The new instance

## TerminalConsoleAppender

*class* `net.minecraftforge.server.terminalconsole.TerminalConsoleAppender`

An Appender that uses the JLine 3.x Terminal to print messages
 to the console.

 The JLine Terminal extends the regular console output with support
 for Ansi escape codes on Windows. Additionally, it's LineReader
 interface can be used to implement enhanced console input, with an
 persistent input line, as well as command history and command completion.

 The TerminalConsole appender replaces the default Console
 appender in your log4j configuration. By default, log4j will automatically
 close the standard output when the original Console appender is
 removed. Consequently, it is necessary to keep an unused Console
 appender.

 Example usage:
 <TerminalConsole>
 <PatternLayout pattern="[%d{HH:mm:ss} %level]: %msg%n"/>
 </TerminalConsole>

 <Console name="SysOut" target="SYSTEM_OUT"/>

 To use the enhanced console input it is necessary to set the
 LineReader using setReader(LineReader). The appender will
 then automatically redraw the current prompt. When creating the
 LineReader it's important to use the Terminal
 returned by getTerminal(). Additionally, the reader should
 be removed from the appender as soon as it's no longer accepting
 input (for example when the user interrupted input using CTRL + C.

 By default, the JLine Terminal is enabled when the application
 is started with an attached terminal session. Usually, this is only the
 case if the application is started from the command line, not if it gets
 started by another application.

 In some cases, it might be possible to support a subset of the features
 in these unsupported environments (e.g. only ANSI color codes). In these
 cases, the system properties may be used to override the default behaviour:

 JLINE_OVERRIDE_PROPERTY - To enable the extended JLine
 input. By default this will also enable the ANSI escape codes.
 ANSI_OVERRIDE_PROPERTY - To enable the output of ANSI
 escape codes. May be used to force the use of ANSI escape codes
 if JLine is disabled or to disable them if it is enabled.

### Fields
- `public static final java.lang.String PLUGIN_NAME` (= "TerminalConsole")
- `public static final java.lang.String PROPERTY_PREFIX` (= "terminal")
  The prefix used for all system properties in TerminalConsoleAppender.
- `public static final java.lang.String JLINE_OVERRIDE_PROPERTY` (= "terminal.jline")
  System property that allows overriding the default detection of the
   console to force enable or force disable the use of JLine. In some
   environments the automatic detection might not work properly.
  
   If this system property is not set, or set to an invalid value
   (neither true nor false) then we will attempt
   to detect the best option automatically.
- `public static final java.lang.String ANSI_OVERRIDE_PROPERTY` (= "terminal.ansi")
  System property that allows overriding the use of ANSI escape codes
   for console formatting even though running in an unsupported
   environment. By default, ANSI color codes are only enabled if JLine
   is enabled. Some systems might be able to handle ANSI escape codes
   but are not capable of JLine's extended input mechanism.
  
   If this system property is not set, or set to an invalid value
   (neither true nor false) then we will attempt
   to detect the best option automatically.
- `public static final java.lang.Boolean ANSI_OVERRIDE`

### Methods
- `public static Terminal getTerminal()`
  Returns the Terminal that is used to print messages to the
   console. Returns null in unsupported environments, unless
   overridden using the JLINE_OVERRIDE_PROPERTY system
   property.
  - returns: The terminal, or null if not supported
- `public static LineReader getReader()`
  Returns the currently configured LineReader that is used to
   read input from the console. May be null if no LineReader
   was configured by the environment.
  - returns: The current line reader, or null if none
- `public static void setReader(LineReader newReader)`
  Sets the LineReader that is used to read input from the console.
   Setting the LineReader will allow the appender to automatically
   redraw the input line when a new log message is added.
  
   Note: The specified LineReader must be created with
   the terminal returned by getTerminal().
  - param: newReader - The new line reader
- `public static boolean isAnsiSupported()`
  Returns whether ANSI escapes codes should be written to the console
   output.
  
   The return value is true by default if the JLine terminal
   is enabled and false otherwise. It may be overridden using
   the ANSI_OVERRIDE_PROPERTY system property.
  - returns: true if ANSI escapes codes should be written to the console
- `public void append(LogEvent event)`
- `public static void close()  throws java.io.IOException`
  Closes the JLine Terminal (if available) and restores the original
   terminal settings.
  - throws: java.io.IOException - If an I/O error occurs
- `public static TerminalConsoleAppender createAppender(java.lang.String name,  Filter filter,  <any> layout,  boolean ignoreExceptions)`
  Creates a new TerminalConsoleAppender.
  - param: name - The name of the appender
  - param: filter - The filter, can be null
  - param: layout - The layout, can be null
  - param: ignoreExceptions - If true exceptions encountered when
 appending events are logged, otherwise they are propagated to the
 caller
  - returns: The new appender
