function feed(parent, args, context) {
  const { skip, first, filter, orderBy } = args;
  const where = filter
    ? {
        OR: [{ description_contains: filter }, { url_contains: filter }]
      }
    : {};

  return context.prisma.links({
    where,
    first,
    skip,
    orderBy
  });
}

module.exports = {
  feed
};
