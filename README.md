### ISIS_Lab5
Запустить приложение1 в Kubernetes, настроить liveness probe

### Инструкция Docker
Склонировать репозиторий
```
git clone https://github.com/shadowHD-bit/ISIS_LAB4.git
```
Создать образ
```
docker build . -t nodejs-docker
```
Запустить образ
```
docker run -p 80:8080 -d nodejs-docker
```
Перейти на локальную страницу
```
localhost:80
```

### Инструкция K8s
Склонировать репозиторий
```
git clone https://github.com/shadowHD-bit/ISIS_LAB4.git
```
Создать Deployment
```
kubectl apply -f .\node-deployment.yaml
```

Или использовать команду
```
kubectl create deployment isis4-dep --image alx5874/my-repository:nodejs-docker-isis5
```

Посмотреть информацию о ресурсах созданного Deployment
```
kubectl describe node
```
Посмотреть информацию о созданных подах
```
kubectl get pods
```