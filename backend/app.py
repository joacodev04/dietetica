from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # permite que React (otro puerto) le pegue a este backend

def lista_admin():
    with open('user.json', 'r') as f:
        return json.load(f) #Hace la conversion automatica a diccionario

@app.route('/app/administracion', methods=['POST'])
def login():
    #Convierte el JSON que llega en el body a un diccionario de Python
    data = request.get_json()

    #Obtengo los datos que me mandan por el form del front
    usuario = data.get('usuario')
    password = data.get('password')

    usuarios = lista_admin()

    #Recorro la lista guardada en usuarios, cada usuario se guarda en x
    #Valido si los datos de x son iguales a "usuario" y "password"
    #Retorno la validacion
    for x in usuarios:
        if x['usuario'] == usuario and x['password'] == password:
            return jsonify({"message": "Login correcto"}), 200 #jsonify convierte diccionario py para devolverle un msj al cliente

    return jsonify({"message": "Login incorrecto"}), 401


if __name__ == '__main__':
    app.run(debug=True, port=5000)