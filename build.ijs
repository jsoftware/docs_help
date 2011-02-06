NB. build

3 : 0''
T=. jpath '~addons/docs/help/'
S=. jpath '~Addons/docs/help/'


mkdir_j_ each T&, each cutopen 'dictionary jforc learning man pcre phrases primer release user'

f=. {."1 dirtree S
t=. T&, each (#S) }.each f
empty t fcopynew each f
)

