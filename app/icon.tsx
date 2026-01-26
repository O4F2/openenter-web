import { ImageResponse } from 'next/og'

// 이미지 크기 및 메타데이터 설정
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// 파비콘 생성 함수
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 20,
                    background: '#000000', // 완전한 블랙 배경
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',      // 선명한 화이트 텍스트
                    fontFamily: 'sans-serif', // 현재 로고 분위기에 맞는 깔끔한 고딕체
                    fontWeight: 900,       // 아주 두껍게 (로고 느낌 강조)
                    borderRadius: '4px',   // 약간의 둥근 모서리 (선택사항, 더 모던해 보임)
                }}
            >
                OE
            </div>
        ),
        {
            ...size,
        }
    )
}