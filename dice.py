import random

def dice():
    a = random.randrange(1, 7)
    b = random.randrange(1, 7)

    if a > b:
        return "너가 졌다냥 ฅ^•ﻌ•^ฅ", 0xFF0000, str(a), str(b)
    elif a == b:
        return "우리 비겼다냥 ฅ^•ﻌ•^ฅ", 0xFAFA00, str(a), str(b)
    elif a < b:
        return "너가 이겼다냥 ฅ^•ﻌ•^ฅ", 0x00ff56, str(a), str(b)