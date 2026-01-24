IMAGE_NAME=jumpapay-frontend-sso
SERVICE_NAME=jumpapay-frontend-sso

build:
	@echo "▶ Building image..."
	@podman build --no-cache \
		--secret id=github_token,env=GITHUB_TOKEN \
		-t $(IMAGE_NAME):latest .

deploy: build
	@echo "▶ Reloading systemd and restarting service..."
	@sudo systemctl daemon-reload
	@sudo systemctl enable $(SERVICE_NAME).service
	@sudo systemctl restart $(SERVICE_NAME).service
	@echo "✅ Deploy finished!"

status:
	sudo systemctl status $(SERVICE_NAME).service

logs:
	sudo journalctl -u $(SERVICE_NAME).service -f