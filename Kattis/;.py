def tri(l,w=0):
    if l==[]:
        return l
    if len(l)==w:
        return l
    if l[0]=='b':
        return ['b']+tri(l[1:])
    if l[0]=='r':
        return tri(l[1:])+['r']
    if l[0]=='bl':
        w+=1
        return tri(l[1:]+[l[0]],w)

