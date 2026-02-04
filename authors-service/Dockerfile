FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./

RUN npm install

# Copiamos el código
COPY . .

# Compilamos TypeScript (si no usas build, se queda igual)
# RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "dev"]
