

**Permisos necesarios:** Mail.ReadBasic, Mail.ReadWrite

### Listar correos

Endpoint: https://graph.microsoft.com/v1.0/me/messages
Method: GET
HEADER: Authorization = access token

Paramas: Obtener los correos que han sido leidos o no.
- $filter = isRead eq true 
- $filter = isRead eq false

### Listar correo por carpeta

Endpoint: https://graph.microsoft.com/v1.0/me/mailFolders/{folder_id}/messages
Method: GET
HEADER: Authorization = access token

### Listar carpetas

Endpoint: https://graph.microsoft.com/v1.0/me/mailFolders
Method: GET
HEADER: Authorization = access token


### Mover correo

Endpoint: https://graph.microsoft.com/v1.0/me/messages/{ID EMAIL}/move
Method: POST
HEADER: Authorization = access token
BODY: destinationId = folder Id


### Crear carpeta

Endpoint: https://graph.microsoft.com/v1.0/me/mailFolders
Method: POST
HEADER: Authorization = access token
BODY: displayName = "Nombre del folder"


### Eliminar correo

Endpoint: https://graph.microsoft.com/v1.0/me/messages/{ID EMAIL}
Method: DELETE
HEADER: Authorization = access token


---
Información de la respuesta que me puedes servir:

Mail
- id
- subject
- bodypreview
- isRead
- sender - from
- hasAttachments
- parentFolderId

Folder:
- id
- displayName
- parentForlderId
- unReadItemCount
- totalItemCount
