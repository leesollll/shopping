// script.js

let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    // Clear existing items
    cartList.innerHTML = '';

    // Add updated items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Calculate total
    cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = cartTotal.toFixed(2);
}

}

let loggedInUser = null;

function toggleLoginForm() {
    const loginFormOverlay = document.getElementById('login-form-overlay');
    const loginForm = document.getElementById('login-form');

    loginFormOverlay.style.display = 'block';
    loginForm.style.display = 'block';
}

function closeLoginForm() {
    const loginFormOverlay = document.getElementById('login-form-overlay');
    const loginForm = document.getElementById('login-form');

    loginFormOverlay.style.display = 'none';
    loginForm.style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 간단한 로그인 체크 (실제로는 서버에서 처리)
    if (username === 'user' && password === 'password') {
        loggedInUser = username;
        document.getElementById('user-greeting').textContent = `안녕하세요, ${loggedInUser}님!`;
        closeLoginForm();
    } else {
        alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
    }
}

function checkout() {
    if (loggedInUser) {
        if (cartTotal > 0) {
            alert(`결제가 완료되었습니다. 총 결제액: $${cartTotal.toFixed(2)}`);
            // 여기에서 실제로는 결제 처리 로직을 수행해야 합니다.
            cartItems = []; // 장바구니 비우기
            updateCart();
        } else {
            alert('장바구니가 비어 있습니다. 상품을 추가해주세요.');
        }
    } else {
        alert('로그인이 필요합니다.');
        toggleLoginForm();
    }
}

function showProductDetail(product) {
    const detailOverlay = document.getElementById('product-detail-overlay');
    const detailContainer = document.getElementById('product-detail');

    // 설정된 상품 정보로 화면 업데이트
    document.getElementById('product-detail-title').textContent = product.title;
    document.getElementById('product-detail-image').src = product.image;
    document.getElementById('product-detail-price').textContent = `가격: $${product.price.toFixed(2)}`;
    document.getElementById('product-detail-description').textContent = product.description;

    // 화면 표시
    detailOverlay.style.display = 'block';
    detailContainer.style.display = 'block';
}

function closeProductDetail() {
    const detailOverlay = document.getElementById('product-detail-overlay');
    const detailContainer = document.getElementById('product-detail');

    // 화면 닫기
    detailOverlay.style.display = 'none';
    detailContainer.style.display = 'none';
}
// 상품 목록 생성 시 상세 정보를 보여주는 이벤트 추가
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    // 각 상품에 클릭 이벤트 추가
    productList.addEventListener('click', function (event) {
        const clickedElement = event.target;

        // 클릭된 요소가 상품 이미지인 경우 상세 정보 보기
        if (clickedElement.tagName === 'IMG') {
            const productElement = clickedElement.closest('.product');
            const productIndex = Array.from(productElement.parentElement.children).indexOf(productElement);

            // 예시로 사용할 상품 데이터
            const exampleProducts = [
                { title: '플로럴 프릴 드레스', image: '<a href="https://ibb.co/98PyvRC"><img src="https://i.ibb.co/98PyvRC/Kakao-Talk-20231120-200437603.jpg" alt="Kakao-Talk-20231120-200437603" border="0"></a>', price: 40000원, description: '살랑살랑 예쁜 드레스 입니다. 동남아 여행에 강추드려요 !' },
                // 다른 상품들도 유사하게 추가 가능
            ];

            const selectedProduct = exampleProducts[productIndex];
            showProductDetail(selectedProduct);
        }
    });
});



// 회원가입
function redirectToSignUp() {

    window.location.href = 'signup.html';
}// script.js

const shoppingCart = document.getElementById('shopping-cart');

function addToCart(productTitle, productPrice) {
    // 장바구니에 상품 추가
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${productTitle} - $${productPrice.toFixed(2)}</p>
        <button onclick="removeFromCart(this)">삭제</button>
    `;

    shoppingCart.appendChild(cartItem);
}

function removeFromCart(button) {
    // 장바구니에서 상품 삭제
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
}



