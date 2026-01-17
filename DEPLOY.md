# Deploy (Hetzner + PM2)

Deze site draait op een Node-server met PM2. Dit document beschrijft de standaard deploy flow.

## 1) Voorbereiden (lokaal)

```sh
git status
git add -A
git commit -m "Your message"
git push
```

## 2) Deploy op server (SSH)

```sh
ssh USER@SERVER_IP
cd /pad/naar/project
git pull
npm ci
npm run build
```

### PM2 herstarten

Met ecosystem file:
```sh
pm2 restart ecosystem.config.js
```

Zonder ecosystem file:
```sh
pm2 restart jouw-app-naam
```

## 3) Checken

```sh
pm2 status
pm2 logs --lines 100
```

## Tips

- Gebruik `npm ci` op de server voor een schone, reproduceerbare install.
- Bij problemen: `pm2 logs --lines 200` en check `npm run build` lokaal.
