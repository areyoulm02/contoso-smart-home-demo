FROM node:18 AS frontend
WORKDIR /app/web
COPY web/ .
RUN npm install && npm run build

FROM node:18 AS prod
WORKDIR /app/web
COPY --from=frontend /app/web/.next ./.next
COPY --from=frontend /app/web/package.json ./package.json
COPY --from=frontend /app/web/public ./public
COPY --from=frontend /app/web/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]