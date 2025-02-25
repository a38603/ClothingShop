from flask import Flask, request, jsonify
import firebase_admin
from firebase_admin import credentials, auth
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cho phép CORS để frontend ReactJS có thể kết nối đến backend

# Khởi tạo Firebase Admin SDK
cred = credentials.Certificate("D:\Manh\wedshop - Copy\backend\login-auth.json")
firebase_admin.initialize_app(cred)

# API đăng ký (SignUp)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data['email']
    password = data['password']
    
    try:
        # Tạo người dùng mới trong Firebase
        user = auth.create_user(email=email, password=password)
        return jsonify({"message": "User created successfully", "uid": user.uid}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# API đăng nhập (Login)
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    try:
        # Firebase không hỗ trợ xác thực trực tiếp từ server
        # Frontend sẽ cần xác thực qua Firebase và gửi token để backend kiểm tra
        user = auth.get_user_by_email(email)
        return jsonify({"message": "Login successful", "uid": user.uid}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
