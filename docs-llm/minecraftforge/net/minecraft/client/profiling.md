# net.minecraft.client.profiling

- [ClientMetricsSamplersProvider](#clientmetricssamplersprovider)
## ClientMetricsSamplersProvider

*class* `net.minecraft.client.profiling.ClientMetricsSamplersProvider`

### Fields
- `private final LevelRenderer levelRenderer`
- `private final Set<MetricSampler> samplers`
- `private final ProfilerSamplerAdapter samplerFactory`

### Methods
- `private void registerStaticSamplers()`
- `public Set<MetricSampler> samplers(Supplier<ProfileCollector> p_172544_)`
