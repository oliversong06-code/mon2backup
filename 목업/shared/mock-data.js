window.AssetFlowMockData = {
  totalAssets: 324500000,
  monthlyChange: 12400000,
  monthlyChangeRate: 3.97,
  assetComposition: [
    { label: "현금·예금", amount: "₩81,125,000", amountValue: 81125000, rate: 25, color: "#22C7C9" },
    { label: "국내주식", amount: "₩64,900,000", amountValue: 64900000, rate: 20, color: "#FF6B6B" },
    { label: "해외주식", amount: "₩58,410,000", amountValue: 58410000, rate: 18, color: "#4D8DFF" },
    { label: "ETF", amount: "₩48,675,000", amountValue: 48675000, rate: 15, color: "#9B6DFF" },
    { label: "연금", amount: "₩32,450,000", amountValue: 32450000, rate: 10, color: "#F2B84B" },
    { label: "부동산", amount: "₩25,960,000", amountValue: 25960000, rate: 8, color: "#4FC27A" },
    { label: "기타", amount: "₩12,980,000", amountValue: 12980000, rate: 4, color: "#6B7280" }
  ],
  allocationViews: {
    nature: [
      { label: "위험자산", amount: "₩178,200,000", amountValue: 178200000, rate: 54.9, color: "#FF6B6B" },
      { label: "안전자산", amount: "₩116,300,000", amountValue: 116300000, rate: 35.8, color: "#22C7C9" },
      { label: "중립·기타자산", amount: "₩30,000,000", amountValue: 30000000, rate: 9.3, color: "#9B6DFF" }
    ]
  },
  trendValues: [286000000, 293500000, 301200000, 306800000, 312100000, 324500000],
  holdings: [
    { name: "삼성전자", type: "국내주식", amountValue: 38400000, amount: "₩38,400,000", rate: "11.8%" },
    { name: "Vanguard S&P 500 ETF", type: "ETF", amountValue: 31200000, amount: "₩31,200,000", rate: "9.6%" },
    { name: "국민은행 정기예금", type: "현금·예금", amountValue: 30000000, amount: "₩30,000,000", rate: "9.2%" },
    { name: "Apple", type: "해외주식", amountValue: 26800000, amount: "₩26,800,000", rate: "8.3%" },
    { name: "개인형 퇴직연금", type: "연금", amountValue: 32450000, amount: "₩32,450,000", rate: "10.0%" },
    { name: "부동산 리츠", type: "부동산", amountValue: 25960000, amount: "₩25,960,000", rate: "8.0%" },
    { name: "국공채 정기예금", type: "현금·예금", amountValue: 20000000, amount: "₩20,000,000", rate: "6.2%" },
    { name: "CMA 계좌", type: "현금·예금", amountValue: 18700000, amount: "₩18,700,000", rate: "5.8%" },
    { name: "미국 기술주 ETF", type: "ETF", amountValue: 17475000, amount: "₩17,475,000", rate: "5.4%" },
    { name: "국내 기술주 ETF", type: "국내주식", amountValue: 14000000, amount: "₩14,000,000", rate: "4.3%" },
    { name: "기타 자산", type: "기타", amountValue: 12980000, amount: "₩12,980,000", rate: "4.0%" },
    { name: "카카오", type: "국내주식", amountValue: 12500000, amount: "₩12,500,000", rate: "3.9%" },
    { name: "입출금통장", type: "현금·예금", amountValue: 12425000, amount: "₩12,425,000", rate: "3.8%" },
    { name: "Microsoft", type: "해외주식", amountValue: 16610000, amount: "₩16,610,000", rate: "5.1%" },
    { name: "Tesla", type: "해외주식", amountValue: 15000000, amount: "₩15,000,000", rate: "4.6%" }
  ],
  influenceFactors: [
    { name: "국내 주식시장", count: "연결 자산 4개", value: 38 },
    { name: "기술 산업", count: "연결 자산 3개", value: 34 },
    { name: "금리 변화", count: "연결 자산 2개", value: 31 },
    { name: "원·달러 환율", count: "연결 자산 2개", value: 18 }
  ],
  returnContributions: [
    { name: "Vanguard S&P 500 ETF", value: 2100000 },
    { name: "삼성전자", value: 1700000 },
    { name: "Apple", value: 1500000 },
    { name: "국내 기술주 ETF", value: 1400000 },
    { name: "카카오", value: -800000 },
    { name: "기타 자산", value: 6500000 }
  ],
  assetInsights: [
    {
      label: "산업",
      title: "국내 기술 산업 관련 자산이 전체 자산의 34%예요.",
      desc: "서로 다른 자산이지만 국내 기술 산업의 변화에 함께 영향을 받을 수 있어요.",
      segments: [
        { name: "삼성전자", rate: 11.8, color: "#FF6B6B" },
        { name: "국내 기술주 ETF", rate: 14.3, color: "#9B6DFF" },
        { name: "카카오", rate: 3.9, color: "#FF8A8A" },
        { name: "기타 관련 자산", rate: 4.0, color: "#6B7280" }
      ]
    },
    {
      label: "환율",
      title: "원·달러 환율의 영향을 받는 자산이 전체 자산의 18%예요.",
      desc: "해외주식과 달러 표시 ETF는 환율 변화에 따라 원화 평가금액이 달라질 수 있어요.",
      segments: [
        { name: "Apple", rate: 8.3, color: "#4D8DFF" },
        { name: "Microsoft", rate: 5.1, color: "#6EA3FF" },
        { name: "Tesla", rate: 4.6, color: "#8AB6FF" }
      ]
    },
    {
      label: "금리",
      title: "금리 변화에 연결된 자산이 전체 자산의 31%예요.",
      desc: "예금과 채권 성격의 자산은 금리 수준에 따라 만기 이후 조건이 달라질 수 있어요.",
      segments: [
        { name: "정기예금", rate: 9.2, color: "#22C7C9" },
        { name: "국공채 정기예금", rate: 6.2, color: "#4FD7D8" },
        { name: "CMA", rate: 5.8, color: "#79E3E4" },
        { name: "연금 내 채권형", rate: 9.8, color: "#F2B84B" }
      ]
    }
  ]
};
