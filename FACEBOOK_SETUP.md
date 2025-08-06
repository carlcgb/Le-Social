# Configuration Facebook API pour Social Bar & Cie

## Étapes pour créer un token d'accès à long terme

### 1. Créer une application Facebook

1. Allez sur https://developers.facebook.com/
2. Cliquez sur "Mes apps" puis "Créer une app"
3. Choisissez "Autre" comme type d'app
4. Donnez un nom à votre app (ex: "Social Bar Website")
5. Ajoutez votre email de contact

### 2. Configurer l'app Facebook

1. Dans le tableau de bord de votre app, ajoutez le produit "Facebook Login"
2. Allez dans "Paramètres" > "De base"
3. Notez votre **ID d'app** et **Clé secrète d'app**

### 3. Obtenir un token d'accès utilisateur

1. Allez sur https://developers.facebook.com/tools/explorer/
2. Sélectionnez votre application
3. Cliquez sur "Générer un token d'accès" 
4. Connectez-vous avec votre compte Facebook (propriétaire de la page)
5. Accordez les permissions nécessaires :
   - `pages_show_list`
   - `pages_read_engagement` 
   - `pages_read_user_content`

### 4. Récupérer l'ID de votre page

1. Avec le token obtenu, faites cette requête dans l'explorateur :
   ```
   GET /me/accounts
   ```
2. Trouvez votre page "Social Bar & Cie" dans la réponse
3. Notez l'**ID** et le **access_token** de votre page

### 5. Convertir en token à long terme

**Option A : Via l'explorateur Facebook**
1. Dans l'explorateur, cliquez sur l'icône "ⓘ" à côté du token
2. Cliquez sur "Étendre le token d'accès"
3. Copiez le nouveau token (valide 60 jours)

**Option B : Via API**
```
GET https://graph.facebook.com/oauth/access_token?
    grant_type=fb_exchange_token&
    client_id={APP_ID}&
    client_secret={APP_SECRET}&
    fb_exchange_token={SHORT_TOKEN}
```

### 6. Obtenir un token de page permanent

1. Utilisez le token étendu pour récupérer le token de page :
   ```
   GET /me/accounts?access_token={EXTENDED_TOKEN}
   ```
2. Le token de page dans la réponse ne expire **jamais** (sauf si vous changez le mot de passe)

### 7. Configurer dans Replit

Ajoutez ces variables dans les Secrets de Replit :
- **FACEBOOK_ACCESS_TOKEN** : Le token de page permanent
- **FACEBOOK_PAGE_ID** : L'ID de votre page

## Permissions nécessaires

- `pages_show_list` : Pour lister vos pages
- `pages_read_engagement` : Pour lire les likes/commentaires  
- `pages_read_user_content` : Pour lire les posts

## Notes importantes

- Les tokens de page ne expirent jamais (sauf changement de mot de passe)
- Gardez vos tokens secrets et sécurisés
- Testez régulièrement que l'API fonctionne
- Si votre page est publique, ces permissions suffisent

## Test de l'API

Une fois configuré, testez avec :
```
GET https://graph.facebook.com/{PAGE_ID}/posts?access_token={PAGE_TOKEN}
```

Vous devriez voir vos posts récents.