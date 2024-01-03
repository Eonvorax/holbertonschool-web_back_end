#!/usr/bin/env python3
"""
This is the async_generator module
"""

import asyncio
from random import uniform
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    The coroutine will loop 10 times, each time asynchronously wait
    1 second, then yield a random number between 0 and 10
    """
    # coroutines = [await uniform(0, 10) for _ in range(10)]
    for _ in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)
