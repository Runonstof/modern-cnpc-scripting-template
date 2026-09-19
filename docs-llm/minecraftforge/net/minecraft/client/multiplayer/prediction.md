# net.minecraft.client.multiplayer.prediction

- [BlockStatePredictionHandler](#blockstatepredictionhandler)
- [BlockStatePredictionHandler.ServerVerifiedState](#blockstatepredictionhandler.serververifiedstate)
- [PredictiveAction](#predictiveaction)
## BlockStatePredictionHandler

*class* `net.minecraft.client.multiplayer.prediction.BlockStatePredictionHandler`

### Fields
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap<BlockStatePredictionHandler.ServerVerifiedState> serverVerifiedStates`
- `private int currentSequenceNr`
- `private boolean isPredicting`

### Methods
- `public void retainKnownServerState(BlockPos p_233868_,  BlockState p_233869_,  LocalPlayer p_233870_)`
- `public boolean updateKnownServerState(BlockPos p_233865_,  BlockState p_233866_)`
- `public void endPredictionsUpTo(int p_233857_,  ClientLevel p_233858_)`
- `public BlockStatePredictionHandler startPredicting()`
- `public void close()`
- `public int currentSequence()`
- `public boolean isPredicting()`

## BlockStatePredictionHandler.ServerVerifiedState

*class* `net.minecraft.client.multiplayer.prediction.BlockStatePredictionHandler.ServerVerifiedState`

Enclosing class: BlockStatePredictionHandler

### Fields
- `final Vec3 playerPos`
- `int sequence`
- `BlockState blockState`

### Methods
- `BlockStatePredictionHandler.ServerVerifiedState setSequence(int p_233882_)`
- `void setBlockState(BlockState p_233884_)`

## PredictiveAction

*interface* `net.minecraft.client.multiplayer.prediction.PredictiveAction`

### Methods
- `Packet<ServerGamePacketListener> predict(int p_233886_)`
