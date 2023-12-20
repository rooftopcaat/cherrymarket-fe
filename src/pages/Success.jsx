import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../components/Order/style.css";
import axios from "axios";
import { useEffect} from "react";


export function SuccessPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const navigate = useNavigate();
  
  
  console.log("paymentKey", paymentKey);
  console.log("orderId", orderId);


  async function confirmPayment() {
    const secret = "test_sk_Z61JOxRQVE1RmbXmvADyVW0X9bAq";
    const encodedSecret = btoa(secret);
    
    // FormData 객체 생성
    const formData = new FormData();
    formData.append("orderId", orderId); // orderId 변수에 저장된 값을 추가
    formData.append("paymentKey", paymentKey); // paymentKey 변수에 저장된 값을 추가
    formData.append("amount", amount); // amount 변수에 저장된 값을 추가
  
    // 서버로 POST 요청 보내기
    const response = await fetch("https://server.marketcherry.store/api/order/confirm", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${encodedSecret}`,
      },
      body: formData, // FormData 객체를 요청 본문으로 설정
    });
  
    if (response.ok) {
      setIsConfirmed(true);
      navigate('/mypage/order');
    }
  }

  useEffect(() => {
    confirmPayment();
  }, []);

  return (
    <div className="wrapper w-100">
      {isConfirmed ? (
        <div
          className="flex-column align-center confirm-success w-100 max-w-540"
          style={{
            display: "flex"
          }}
        >
          <img
            src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
            width="120"
            height="120"
          />
          <h2 className="title">결제를 완료했어요</h2>
          <div className="response-section w-100">
            <div className="flex justify-between">
              <span className="response-label">결제 금액</span>
              <span id="amount" className="response-text">
                {amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">주문번호</span>
              <span id="orderId" className="response-text">
                {orderId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">paymentKey</span>
              <span id="paymentKey" className="response-text">
                {paymentKey}
              </span>
            </div>
          </div>

          <div className="w-100 button-group">
            <a class="btn primary" href='/my/payment-logs' target="_blank" rel="noreferrer noopener">테스트 결제내역 확인하기</a>
            <div className="flex" style={{ gap: "16px" }}>
              <a
                className="btn w-100"
                href="https://developers.tosspayments.com/sandbox"
              >
                다시 테스트하기
              </a>
              <a
                className="btn w-100"
                href="https://docs.tosspayments.com/guides/payment-widget/integration"
                target="_blank"
                rel="noopner noreferer"
              >
                결제 연동 문서가기
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-column align-center confirm-loading w-100 max-w-540">
          <div className="flex-column align-center">
            <img
              src="https://static.toss.im/lotties/loading-spot-apng.png"
              width="120"
              height="120"
            />
            <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
            <h4 className="text-center description">결제 승인하고 완료해보세요.</h4>
          </div>
          <div className="w-100">
            <button className="btn primary w-100" onClick={confirmPayment}>
            결제 승인하기
          </button>
          </div>
        </div>
      )}
    </div>
  );
}