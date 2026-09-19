# net.minecraft.client.gui.chat

- [IChatListener](#ichatlistener)
- [NarratorChatListener](#narratorchatlistener)
- [NormalChatListener](#normalchatlistener)
- [OverlayChatListener](#overlaychatlistener)
## IChatListener

*interface* `net.minecraft.client.gui.chat.IChatListener`

### Methods
- `void say(ChatType chatTypeIn,  ITextComponent message)`

## NarratorChatListener

*class* `net.minecraft.client.gui.chat.NarratorChatListener`

All Implemented Interfaces: IChatListener

### Fields
- `public static final NarratorChatListener INSTANCE`

### Methods
- `public void say(ChatType chatTypeIn,  ITextComponent message)`
- `public void announceMode(int p_193641_1_)`
- `public boolean isActive()`
- `public void clear()`

## NormalChatListener

*class* `net.minecraft.client.gui.chat.NormalChatListener`

All Implemented Interfaces: IChatListener

### Methods
- `public void say(ChatType chatTypeIn,  ITextComponent message)`

## OverlayChatListener

*class* `net.minecraft.client.gui.chat.OverlayChatListener`

All Implemented Interfaces: IChatListener

### Methods
- `public void say(ChatType chatTypeIn,  ITextComponent message)`
