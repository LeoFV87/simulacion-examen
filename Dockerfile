FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# DEFECTO DEL RETO 1:
# La app escucha en el puerto 8080 en server.js, pero aqui expone el 3000.
# CORRECCION: Cambiar EXPOSE 3000 por EXPOSE 8080.
EXPOSE 8080
CMD ["node", "server.js"]
