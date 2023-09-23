def crypt(ch,n,key):
    ch=ch+' '*(len(ch)-len(ch)%n)
    sh=''
    l=0
    for i in range(len(ch)//n):
        k=0
        while k<n :
            a=l+int(key[k])-1
            sh=sh+ch[a]
            k=k+1
        l=l+n
    return sh






def yin_yang(ch):
    if len(ch)==1 or len(ch)==3:
        return 0
    if len(ch)==2:
        if ch[0]==ch[1]:
            return 0
        else:
            return 1
    i=0
    n=len(ch)
    while i<len(ch)-3:
        sh=ch[i:i+3]
        if sh in ['WWB',"BWW"]:
            ch='W'+ch[i+3:]
            i+=3
        elif sh in ['BBW','WBB']:
            ch='B'+ch[i+3:]
            i+=3
        else:
            i+=1
        print(ch)
    return(yin_yang(ch))

print(yin_yang('BBBBWWWBBB'))




















