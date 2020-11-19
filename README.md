# studio8

# Simple Server

```bash
dnf update -y
dnf install -y nginx
systemctl enable nginx && systemctl start nginx
```

## server setup

CentOS 8 at Hetzner Cloud:

```bash
dnf update -y
dnf install -y git nano
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
dnf install -y docker-ce --nobest
systemctl enable --now docker
curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

```

Save your personal github token at `~/github-personal-access-token.txt`

See: https://github.com/settings/tokens

Login to github Docker registry:

```bash
 cat ~/github-personal-access-token.txt | docker login https://docker.pkg.github.com -u mr678 --password-stdin
```
