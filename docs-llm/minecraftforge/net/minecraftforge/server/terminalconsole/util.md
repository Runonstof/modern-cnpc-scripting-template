# net.minecraftforge.server.terminalconsole.util

- [LoggerNamePatternSelector](#loggernamepatternselector)
## LoggerNamePatternSelector

*class* `net.minecraftforge.server.terminalconsole.util.LoggerNamePatternSelector`

A PatternSelector that selects patterns based on the logger name.
 Can be used to log messages from different loggers using different patterns.

 Multiple logger names may be separated using comma in the
 PatternMatch "key". The pattern will be applied
 if the logger name matches at least one of them.

 Example usage:
 <PatternLayout>
 <LoggerNamePatternSelector defaultPattern="[%d{HH:mm:ss} %level] [%logger]: %msg%n">
 <!-- Log root (empty logger name), "Main", and net.minecrell.* without logger prefix -->
 <PatternMatch key=",Main,net.minecrell." pattern="[%d{HH:mm:ss} %level]: %msg%n"/>
 <PatternMatch key="com.example.Logger" pattern="EXAMPLE: %msg%n"/>
 </LoggerNamePatternSelector>
 </PatternLayout>

### Methods
- `public PatternFormatter[] getFormatters(LogEvent event)`
- `public static LoggerNamePatternSelector createSelector(java.lang.String defaultPattern,  PatternMatch[] properties,  boolean alwaysWriteExceptions,  boolean disableAnsi,  boolean noConsoleNoAnsi,  Configuration config)`
  Creates a new LoggerNamePatternSelector.
  - param: defaultPattern - The default pattern to use if no logger name matches
  - param: properties - The pattern match rules to use
  - param: alwaysWriteExceptions - Write exceptions even if pattern does not
 include exception conversion
  - param: disableAnsi - If true, disable all ANSI escape codes
  - param: noConsoleNoAnsi - If true and System.console() is null,
 disable ANSI escape codes
  - param: config - The configuration
  - returns: The new pattern selector
