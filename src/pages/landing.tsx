export default function Landing() {
  const categories = [
    "여행/관광지",
    "애견펜션",
    "체험/레저",
    "호텔/리조트",
    "음식점",
    "애견카페",
    "애견동반카페",
    "스튜디오",
  ];
  const events = [
    { name: "장소이름, 주소지", desc: "장소에 대한 설명" },
    { name: "장소이름, 주소지", desc: "장소에 대한 설명" },
  ];

  return (
    <div className="App">
      {/* 지도 영역 수민 */}ß{" "}
      <div style={{ padding: "24px" }}>
        {/* 검색창 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f5f5f5",
            borderRadius: "12px",
            padding: "12px 16px",
            marginBottom: "24px",
          }}
        >
          <input
            type="text"
            style={{
              border: "none",
              background: "transparent",
              flex: 1,
              fontSize: "16px",
            }}
          />
        </div>
        {/* 카테고리 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          {categories.map((pet) => (
            <div
              key={pet}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#ddd",
                  borderRadius: "12px",
                  marginBottom: "8px",
                }}
              />
              <div style={{ fontSize: "13px" }}>{pet}</div>
            </div>
          ))}
        </div>
        {/* 이벤트 섹션 */}
        <div>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "16px",
            }}
          >
            7월의 펫 이벤트
          </h2>
          {events.map((ev, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "16px",
                borderBottom: "1px solid #eee",
                paddingBottom: "12px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {ev.name}
              </div>
              <div style={{ color: "#555", fontSize: "14px" }}>{ev.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
