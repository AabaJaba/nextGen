from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA

pub_key = RSA.import_key(open('public_pem.pem', 'r').read())
cipher = PKCS1_OAEP.new(key=pub_key)

for x in range(4):
    f=open(f'file{x+1}.txt')
    f1=f.read()
    f2=bytes(f1,'utf-8')
    f.close()
    cipher_text = cipher.encrypt(f2)

    with open(f'encrypted_file{x+1}.txt', 'w') as f4:
        f4.write(str(cipher_text))
        f4.close()