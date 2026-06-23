#!/usr/bin/env python3
"""
Figma 에셋을 public/assets/images 폴더에 로컬로 다운로드하는 스크립트
실행: python3 download_assets.py
"""

import urllib.request
import os
import sys

DEST = os.path.join(os.path.dirname(__file__), "public", "assets", "images")
os.makedirs(DEST, exist_ok=True)

# home.html에 사용된 Figma 에셋 URL → 로컬 파일명
ASSETS = {
    "https://www.figma.com/api/mcp/asset/f73d9cf3-dc51-493b-b712-7bc1fd335b4a": "icon-arrow-drop-down.png",
    "https://www.figma.com/api/mcp/asset/aab9f257-4d13-425f-855d-df14939cd4f5": "icon-local-atm.png",
    "https://www.figma.com/api/mcp/asset/a55c3022-add6-477b-aebd-8c448b939af8": "icon-notifications.png",
    "https://www.figma.com/api/mcp/asset/398e0157-d931-440f-9926-d37b2b867e0a": "icon-dehaze.png",
    "https://www.figma.com/api/mcp/asset/65da9bd9-9bd4-4fcd-9086-161939b74ac3": "icon-ellipse-317.png",
    "https://www.figma.com/api/mcp/asset/e8a47e6c-ca3f-4008-a432-f23ce132db37": "icon-arrow-forward.png",
    "https://www.figma.com/api/mcp/asset/99e9b15c-9338-4213-8381-45cf7b3f8a62": "icon-arrow-forward-1.png",
    "https://www.figma.com/api/mcp/asset/83977c40-3b00-4ac9-9dcc-8741e93e3dad": "icon-arrow-forward-2.png",
    "https://www.figma.com/api/mcp/asset/5f10bcc3-5f69-4a6a-9f14-f7cd01275f0c": "icon-group-plus.png",
    "https://www.figma.com/api/mcp/asset/1f15e916-7b6d-418b-9268-d9f40d516cf0": "icon-group-minus.png",
    "https://www.figma.com/api/mcp/asset/841d40c9-e418-4b86-bb1b-c39e6d333cb1": "icon-ellipse-350.png",
    "https://www.figma.com/api/mcp/asset/c48228c2-c008-4145-85ce-6e852bc25b5c": "icon-check.png",
    "https://www.figma.com/api/mcp/asset/d45b19a3-9f83-495f-a941-05cf09b61c57": "icon-remove.png",
    "https://www.figma.com/api/mcp/asset/443aeff9-cfc2-4d24-9e91-38871f2f8e61": "icon-paid.png",
    "https://www.figma.com/api/mcp/asset/28584360-e095-410d-8188-537d7a5d3563": "icon-explore.png",
    "https://www.figma.com/api/mcp/asset/0c5cc58f-5374-4cf0-ba2c-a5dd6e0daaf2": "icon-shopping-basket.png",
    "https://www.figma.com/api/mcp/asset/cacdc72f-e8c8-42f3-8730-92da507c5736": "icon-storefront.png",
    "https://www.figma.com/api/mcp/asset/5fad3c33-482e-49ca-9c3f-dd08a552f89b": "icon-home.png",
    "https://www.figma.com/api/mcp/asset/a7ff1435-bda1-4b98-bfbf-f46b76ef1210": "icon-arrow-forward-ios.png",
    "https://www.figma.com/api/mcp/asset/923b154b-c101-4cae-a1b8-567862eab50a": "icon-arrow-left.png",
    "https://www.figma.com/api/mcp/asset/357131ff-9b0b-4dcf-9e28-11f4131b7ace": "icon-arrow-left-1.png",
    "https://www.figma.com/api/mcp/asset/92c52da4-6454-4a80-abc0-4ecf459ef9dc": "icon-arrow-left-2.png",
    "https://www.figma.com/api/mcp/asset/0d9a74a4-fa12-4a63-9d89-1e122cc2568f": "icon-arrow-right.png",
    "https://www.figma.com/api/mcp/asset/e2be22d6-9053-4536-979a-53e5d39dba6b": "sprite-pos-delivery.png",
    "https://www.figma.com/api/mcp/asset/8687a3b1-b2d5-4fdf-8265-9de462213682": "sprite-category.png",
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}

ok, fail = 0, 0
for url, filename in ASSETS.items():
    dest_path = os.path.join(DEST, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        with open(dest_path, "wb") as f:
            f.write(data)
        size = len(data)
        print(f"✅  {filename} ({size:,} bytes)")
        ok += 1
    except Exception as e:
        print(f"❌  {filename} — {e}")
        fail += 1

print(f"\n완료: {ok}개 성공 / {fail}개 실패")
print(f"저장 위치: {DEST}")
