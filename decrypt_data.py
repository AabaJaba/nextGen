from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA
prv_key=RSA.import_key(open('private_pem.pem', 'r').read())
decrypt = PKCS1_OAEP.new(key=prv_key)


for x in range(4):
    f=open(f'f{x+1}.txt', 'r')
    f1=f.read()

    f1 = str(f1)

    f1 = f1[2:]
    f1 = f1[:-1]

    f2 = bytes(f1, "latin1")
    f3 = f2.decode("unicode_escape")
    f4 = f3.encode("raw_unicode_escape")

    decrypted_message = decrypt.decrypt(f4)
    str_txt=decrypted_message.decode('utf-8')
    f1=open(f'decrypted_file{x+1}.txt', 'w')
    f1.write(str_txt)
    f1.close()