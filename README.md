# studio8

# Simple Server - Ubunto

```bash
apt-get update -y
apt-get install -y nginx git snapd

systemctl enable nginx && systemctl start nginx
snap install core; snap refresh core

ln -s /etc/nginx/sites-available/studio8-kosmetik.de /etc/nginx/sites-enabled/

# install certbot
curl -O https://dl.eff.org/certbot-auto && mv -f certbot-auto /usr/local/bin/certbot-auto && chmod 0755 /usr/local/bin/certbot-auto

adduser studio8
mkdir -p /var/www/studio8-kosmetik.de
chown studio8:studio8 -R /var/www/studio8-kosmetik.de

su studio8
(umask 077 && test -d /home/studio8/.ssh || mkdir /home/studio8/.ssh)
(umask 077 && touch /home/studio8/.ssh/authorized_keys)

```

ssh-keygen -m PEM -t rsa -b 4096

copy `id_rsa.pub` to `/home/studio8/.ssh/authorized_keys`
copy `id_rsa` per c&p to github action secrets `GIT_STUDIO8_KOSMETIK`

remove `id_rsa.pub` and `id_rsa`

Config Server

Install Let's Encrypt

```bash
snap install --classic certbot
ln -s /snap/bin/certbot /usr/bin/certbot
certbot --nginx

/usr/local/bin/certbot-auto --nginx
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

# Simple Server - CentOS

```bash
dnf update -y
dnf install -y epel-release
dnf install -y nginx nano git snapd

systemctl enable nginx && systemctl start nginx

# install certbot
curl -O https://dl.eff.org/certbot-auto && mv -f certbot-auto /usr/local/bin/certbot-auto && chmod 0755 /usr/local/bin/certbot-auto

mkdir -p /data/www/studio8
chown studio8:studio8 -R /data/www/studio8

adduser studio8
su studio8
(umask 077 && test -d /home/studio8/.ssh || mkdir /home/studio8/.ssh)
(umask 077 && touch /home/studio8/.ssh/authorized_keys)

```

Copy `id_github_rsa.pub` to `/home/studio8/.ssh/authorized_keys`

Config Server

Install Let's Encrypt

```bash
/usr/local/bin/certbot-auto --nginx
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
