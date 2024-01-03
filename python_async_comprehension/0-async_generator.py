#!/usr/bin/env python3
"""
This is the async_generator module
"""

import asyncio
from random import uniform


async def async_generator():
    """
    The coroutine will loop 10 times, each time asynchronously wait
    1 second, then yield a random number between 0 and 10
    """
    # coroutines = [await uniform(0, 10) for _ in range(10)]
    for _ in range(10):
        await asyncio.sleep(1)
        yield uniform(0, 10)
